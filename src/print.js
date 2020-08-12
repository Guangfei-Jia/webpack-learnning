  function getComponent() {
    return import(/* webpackChunkName: "lodash-jgf" */ 'lodash').then(res => {
           var element = document.createElement('div');
           element.innerHTML = _.join(['Hello', 'webpasssssck'], ' ');
         return element;
    })
  }
   getComponent().then(component => {
      document.body.appendChild(component);
    })