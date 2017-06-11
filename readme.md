# Deploying with now

A simple node server demo for deploying with https://zeit.co/now. Check out this test site at https://muan-testing.now.sh.

As much as I love now.sh, it does have some unexpected quirks. This documents my initial needs and solutions found. :)

## Steps

1. Get an account at https://zeit.co/login

2. Install now CLI with `npm install now -g`

3. Authenticate with `now login`

4. Deploy with `now --public`

5. Alias with `now ln`

6. :tada:

### `now --public`

Deploys your project and marks it as public. The `--public` flag prevents you from having to confirm that your project will be public.

"Public" means that people will be able to view your source code and logs via `deployment_url/_logs`. For example, https://muan-testing.now.sh/_logs.

### `now ln`

Aliases your deployment.

By default, every deployment gets a new random URL like `projectname-aicbqophhw.now.sh`. After deployment, alias your newest deployment with the alias name set in [`package.json`](https://github.com/muan/deploying-with-now/blob/5074a2c84c60834b60e6ed3eb2e1fac919f65e3f/package.json#L14).

### Environment variables

Set your secret environment variable with `now secrets variable_name variable_value`, and expose them through [`package.json`](https://github.com/muan/deploying-with-now/blob/5074a2c84c60834b60e6ed3eb2e1fac919f65e3f/package.json#L15-L17).

## Doc links

[`aliases`](https://zeit.co/docs/features/aliases), [`env-and-secrets`](https://zeit.co/docs/features/env-and-secrets).
