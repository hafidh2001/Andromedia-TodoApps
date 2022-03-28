import { layout } from 'web-init'
import { useGlobal } from '../../../../../pkgs/web/init/node_modules/web-utils/src'
import { globalLayout } from '../global/layout'

export default layout({
  component: ({ children }) => {
    return (
      <div>
        <div>{children}</div>
      </div>
    )
  },
})
