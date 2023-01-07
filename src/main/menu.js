import { Menu } from 'electron'

const createMenu = () => {
  const template = [
    {
      label: 'Inicio',
      click: (menuItem, win) => {
        win.webContents.send('navigate', 'Home')
      }
    },
    {
       label: 'Produto',
       submenu: [
          {
             label: 'Cadastro',
             click: (menuItem, win) => {
              win.webContents.send('navigate', 'RegisterProducts')
            }
          }
       ]
    }
  ]

  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
}

export default createMenu
