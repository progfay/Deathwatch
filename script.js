const MAX_DISTANCE = 500

const AudioContext = window.AudioContext || window.webkitAudioContext
const audioContext = new AudioContext()
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

const decodeAudioData = (arrayBuffer) => (
  new Promise((resolve, reject) => {
    audioContext.decodeAudioData(arrayBuffer, resolve)
  })
)

const getAudioBuffer = (url) => (
  new Promise((resolve, reject) => {
    window.fetch(url)
      .then(response => response.arrayBuffer())
      .then(decodeAudioData)
      .then(resolve)
      .catch(reject)
  })
)

const buffer = getAudioBuffer('shutter.mp3')

const playShutter = async (e) => {
  e.target.remove()
  const div = document.createElement('div')
  div.className = 'eyes'
  div.appendChild(document.createTextNode('👁'.repeat(500)))
  document.body.appendChild(div)
  document.body.style.background = 'red'
  while (true) {
    const audioBufferSourceNode = audioContext.createBufferSource()
    audioBufferSourceNode.buffer = await buffer
    const pannerNode = audioContext.createPanner()
    pannerNode.panningModel = 'HRTF'
    const posX = (Math.random() - 0.5) * MAX_DISTANCE
    const posY = (Math.random() - 0.5) * MAX_DISTANCE
    const posZ = (Math.random() - 0.5) * MAX_DISTANCE
    const dist = Math.sqrt(posX ** 2 + posY ** 2 + posZ ** 2)
    pannerNode.setPosition(posX, posY, posZ)
    pannerNode.setOrientation(posX / dist, posY / dist, posZ / dist)
    audioBufferSourceNode.connect(pannerNode).connect(audioContext.destination)
    await sleep(100 + Math.random() * 1000)
    audioBufferSourceNode.start()
  }
}

document.getElementById('play-button').addEventListener('click', playShutter, { once: true, passive: true })
