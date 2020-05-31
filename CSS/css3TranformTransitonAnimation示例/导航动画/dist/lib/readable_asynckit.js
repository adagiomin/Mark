 need an environment
variable to be set across an entire inline shell script, rather than just one
command.

For example, if you want to have the environment variable apply to several
commands in series then you will need to wrap those in quotes and use 
`cross-env-shell` instead of `cross-env`.

```json
{
  "scripts": {
    "greet": "cross-env-shell GREETING=Hi NAME=Joe \"echo $GREETING && echo $NAME\""
  }
}
```

The rule of thumb is: if you want to pass to `cross-env` a command that
contains special shell characters *that you want interpreted*, then use
`cross-env-shell`. Otherwise stick to `cross-env`.

On Windows you need to use `cross-env-shell`, if you want to handle [signal events](https://nodejs.org/api/process.html#process_signal_events) inside of your program. A common case for that is when you want to capture a `SIGINT` event invoked by pressing `Ctrl + C` on the command-line interface.

## Windows Issues

Please note that `npm` uses `cmd` by default and that doesn't support command
substitution, so if you want to leaverage that, then you need to update your
`.npmrc` to set the `script-shell` to powershell.
[Learn more here](https://github.com/kentcdodds/cross-env/issues/192#issuecomment-513341729).

## Inspiration

I originally created this to solve a problem I was having with my npm scripts in
[angular-formly][angular-formly]. This made contributing to the project
much easier for Windows users.

## Other Solutions

- [`env-cmd`](https://github.com/toddbluhm/env-cmd) - Reads environment variables from a file instead
- [`@naholyr/cross-env`](https://www.npmjs.com/package/@