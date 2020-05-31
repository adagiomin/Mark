tokens.push(['$', '$', line, pos - offset]);
                break;

            case colon:
                tokens.push([':', ':', line, pos - offset]);
                break;

            case semicolon:
                tokens.push([';', ';', line, pos - offset]);
                break;

            case openBracket:
                tokens.push(['(', '(', line, pos - offset]);
                break;

            case closeBracket:
                tokens.push([')', ')', line, pos - offset]);
                break;

            case singleQuote:
            case doubleQuote:
                quote = code === singleQuote ? "'" : '"';
                tokens.push([quote, quote, line, pos - offset]);
                next = pos + 1;

                var _tokenizeString = (0, _tokenizeString3.default)(input, line, next, quote),
                    t = _tokenizeString.tokens,
                    _p = _tokenizeString.pos;

                tokens = tokens.concat(t);
                next = _p;

                po