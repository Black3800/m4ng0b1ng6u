import React, {Component} from 'react';

class Encrypt extends Component
{
    static charRules = [
        {
            start: 'a',
            end: 'z',
            enc: (c) => 97 + ((c - 95) % 26)
        },
        {
            start: 'A',
            end: 'Z',
            enc: (c) => 65 + ((c - 63) % 26)
        },
        {
            start: '0',
            end: '9',
            enc: (c) => 48 + ((c - 46) % 10)
        },
        {
            start: ' ',
            end: ' ',
            enc: (c) => {
                let x = Math.floor(Math.random() * 3)
                let y = [33, 35, 36]
                return y[x]
            }
        },
        {
            start: '_',
            end: '_',
            enc: (c) => 95
        },
        {
            start: '.',
            end: '.',
            enc: (c) => 46
        }
    ]

    constructor(props) {
        super(props)
        this.state = {
            'plain': ''
        }
        this.inputRef = React.createRef()

        this.validateInput = this.validateInput.bind(this)
        this.onChange = this.onChange.bind(this)
        this.encryptFunction = this.encryptFunction.bind(this)
    }

    validateInput()
    {
        let regex = /^[\w\s\.]+$/
        if (!this.inputRef.current.value.match(regex))
        {
            this.inputRef.current.value = this.inputRef.current.value.split('').slice(0, -1).join('')
            return false
        }
        return true
    }

    onChange(e) {
        e.preventDefault()
        if (!this.validateInput())
        {
            this.setState({
                'plain': 's0M3 0f mY fR13nD5 c411 m3 4nAk1N.'
            })
            return false
        }
        this.setState({
            'plain': this.inputRef.current.value
        })
    }

    encryptFunction(s) {
        if (s == '') return 'Encrypted text will appear here.'
        let encryptChar = (c) => {
            let rule = Encrypt.charRules.find(x => c >= x.start && c <= x.end)
            return String.fromCharCode(rule.enc(c.charCodeAt(0)))
        }
        return s.split('').map((c) => encryptChar(c)).join('')
    }

    componentDidMount() {
        this.inputRef.current.focus()
    }

    render() {
        return (
            <div>
                <p>Your hint has been encrypted by Mango-Bingsu-Algorithm. The interface below might be helpful for you to decrypt the text.</p>
                <form onSubmit={this.onChange}>
                    <input
                        type='text'
                        ref={this.inputRef}
                        placeholder='Text to encrypt here'
                        pattern="^[\w\s\.]+$"
                        onInput={this.validateInput}
                    />
                    <input type='submit' value='Encrypt' />
                </form>
                <p>{this.encryptFunction(this.state.plain)}</p>
                <p>(Try encrypting 'abcd 1234' and see what happens)</p>
            </div>
        )
    }
}

export default Encrypt;