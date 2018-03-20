import PackageJsonProvider from './package-json'
import TravisProvider from './travis'
import BabelProvider from './babel'
import GitignoreProvider from './gitignore'
import MochaProvider from './mocha'

const providerList = [
  PackageJsonProvider,
  TravisProvider,
  BabelProvider,
  GitignoreProvider,
  MochaProvider,
]

const providerMap = providerList.reduce(
  (acc, provider) => ({
    ...acc,
    [provider.id]: provider,
  }),
  {},
)

export default providerMap
