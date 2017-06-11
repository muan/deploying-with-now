# Deploying with now

This documents how to deploy a simple node app to https://zeit.co/now, set up alias, and configure environment variables. Check out this test site at https://muan-testing.now.sh.

## Steps

1. Fork this repository or have your project ready with `npm start` scrpt and [these configurations in your `package.json`](https://github.com/muan/deploying-with-now/blob/5074a2c84c60834b60e6ed3eb2e1fac919f65e3f/package.json#L13-L18).

2. Get an account at https://zeit.co/login

3. Install now CLI with `npm install now -g`

4. Authenticate with `now login`

5. Deploy with `now --public`

6. Alias with `now ln`

7. :tada:

### `now --public`

Deploys your project and marks it as public. The `--public` flag prevents you from having to confirm that your project will be public.

"Public" means that people will be able to view your source code and logs via `deployment_url/_logs`. For example, https://muan-testing.now.sh/_logs.

### `now ln`

Aliases your deployment.

Every deployment gets a new random URL like `projectname-aicbqophhw.now.sh`. This command aliases your latest deployment with the name set in [`package.json`](https://github.com/muan/deploying-with-now/blob/5074a2c84c60834b60e6ed3eb2e1fac919f65e3f/package.json#L14).

### Environment variables

Set your secret environment variable with `now secrets variable_name variable_value`, and expose them through [`package.json`](https://github.com/muan/deploying-with-now/blob/5074a2c84c60834b60e6ed3eb2e1fac919f65e3f/package.json#L15-L17).

## Doc links

[`aliases`](https://zeit.co/docs/features/aliases), [`env-and-secrets`](https://zeit.co/docs/features/env-and-secrets).
