# Deploying with now

This documents how to deploy a simple node app to https://zeit.co/now, set up alias, and configure environment variables. Check out this test site at https://muan-testing.now.sh.

## Steps

1. Fork this repository or have your project ready with `npm start` script and [these configurations in your `package.json`](https://github.com/muan/deploying-with-now/blob/5074a2c84c60834b60e6ed3eb2e1fac919f65e3f/package.json#L13-L18).

2. Get an account at https://zeit.co/login.

3. Install now CLI with `npm install now -g`.

4. Authenticate and deploy with `now --public`.

5. Set an environment variable with `now secrets [name] [value]`.

6. Alias deployment with `now ln`.

7. :tada:.

## Details

### `now --public`

Deploys your project and marks it as public. The `--public` flag prevents you from having to confirm that your project will be public.

"Public" means that people will be able to view your source code and logs via `deployment_url/_logs`. For example, https://muan-testing.now.sh/_logs.

### `now ln`

Aliases your deployment.

Every deployment gets a new random URL like `projectname-aicbqophhw.now.sh`. This command aliases your latest deployment with the name set in [`package.json`](https://github.com/muan/deploying-with-now/blob/5074a2c84c60834b60e6ed3eb2e1fac919f65e3f/package.json#L14).

⚠️ Old deployments stay around til it's frozen or manually removed (which takes a while to die completely). This means if your app is actively pulling, listening, or actiing on things, it will not stopped immediately on demand – you might get into a situation where multiple versions of your script is running.

### Environment variables

Expose your secret environment variables to your app in [`package.json`](https://github.com/muan/deploying-with-now/blob/5074a2c84c60834b60e6ed3eb2e1fac919f65e3f/package.json#L15-L17). The `@` before the variable name tells now to look for variable of that name in the secrets.

## Doc links

[`aliases`](https://zeit.co/docs/features/aliases), [`env-and-secrets`](https://zeit.co/docs/features/env-and-secrets).
