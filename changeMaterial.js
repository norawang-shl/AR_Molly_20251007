function changeLabelMaterial(color) {
  const molly = document.querySelector('#molly');

  molly.addEventListener('model-loaded', () => {
    const mesh = molly.getObject3D('mesh');
    if (!mesh) return;

    // 遍歷子物件，只改 Label
    mesh.traverse((node) => {
      if (node.isMesh && node.name.includes('Label')) {
        let texturePath = '';
        switch(color) {
          case 'red': texturePath = 'textures/tex1.jpg'; break;
          case 'blue': texturePath = 'textures/tex2.jpg'; break;
          case 'green': texturePath = 'textures/tex3.jpg'; break;
        }

        node.material.map = new THREE.TextureLoader().load(texturePath);
        node.material.needsUpdate = true;
      }
    });
  });
}
