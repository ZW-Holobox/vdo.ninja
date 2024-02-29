function startInteract() {
    press2talk(true)
    toggleSettings()

    return new Promise((resolve) => {

        setTimeout(() => {
            console.log('Inciado')
            resolve()
        },2000)
    })
}


async function selectAudio(nameDevice) {
    var options = document.querySelectorAll('label')

    for (var i=0; i<options.length;i++){
        var option = options[i];
        if (option.innerHTML === nameDevice){
            option.parentNode.firstChild.click()
        }
    }

    return new Promise((resolve) => {

        setTimeout(() => {
            console.log('Audio Selecionado')
            resolve()
        },2000)
    })
}

async function selectVideo(nameDeviceVideo) {
    var options = document.querySelectorAll('option')

    for (var i=0; i<options.length;i++){
        var option = options[i];
        if (option['text'] === nameDeviceVideo){
            option.selected = true
        }
    }

    return new Promise((resolve) => {

        setTimeout(() => {
            console.log('Video Selecionado')
            resolve()
        },2000)
    })
}


async function runStart(camera,audio){
    await startInteract();
    await selectVideo(camera)
    await selectAudio(audio);
}