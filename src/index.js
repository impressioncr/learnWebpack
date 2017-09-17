const button = document.createElement('button')
button.innerText = 'Click me'
button.onclick = () => {
  System.import('./image_viewer').then(module => {
    module.default() // 异步加载模块
  })
}

document.body.appendChild(button)