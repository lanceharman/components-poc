# Components POC using NX

Proof of concept repo for proposed new component system.

## Generating new components
As we want the components to be individually versioned and published, be sure to include the --publishable flag. The following command should be our go-to 
`nx generate @nrwl/react:library --name=<COMPONENTNAME> --importPath=@<DESIGNLIBNAME>/<COMPONENTNAME> --publishable --no-interactive`

Rather than memorizing or aliasing this command, the process is made easier via the NX console plugin for VSC which can be installed with the extensions tab.

- Select NX Console
- Click Generate in the top left
- Select `@nrwl/react - library` from the dropdown that activates
- Make sure to check the Publishable checkbox

note that making the component publishable means the importPath is now a required field

## Publishing

TODO: We'll likely want publishing to be handled by CI/CD

When we want to publish updates to a component.

- first make adjustments to the version in /libs/<COMPONENT>/package.json
- build the package with `nx build <COMPONENT>
- publish the new build with `npm publish /dist/libs/<COMPONENT>

