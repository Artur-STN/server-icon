function checkServer(idServer) {

    let servidor = document.getElementById(idServer)
    let cloud = document.getElementById('cloud')

    if (cloud.classList.contains("disable")) {

        alert('Nuvem está desligada, ligue-a primeiro')

    } else {

        servidor.classList.toggle("disable")

    }

}

function checkCloud() {

    let user = document.getElementById('user')
    let cloud = document.getElementById('cloud')

    let serverNumber1 = document.getElementById('serverNumber1')
    let serverNumber2 = document.getElementById('serverNumber2')
    let serverNumber3 = document.getElementById('serverNumber3')

    if (user.classList.contains("disable")) {

        alert('Nuvem está desligada, ligue-a primeiro')

    } else {

        cloud.classList.toggle("disable")

        if (cloud.classList.contains("disable")) {

            serverNumber1.classList.add('disable')
            serverNumber2.classList.add('disable')
            serverNumber3.classList.add('disable')

        } else {

            serverNumber1.classList.remove('disable')
            serverNumber2.classList.remove('disable')
            serverNumber3.classList.remove('disable')

        }
    }



}

function checkUser() {

    let user = document.getElementById('user')

    let cloud = document.getElementById('cloud')

    let serverNumber1 = document.getElementById('serverNumber1')
    let serverNumber2 = document.getElementById('serverNumber2')
    let serverNumber3 = document.getElementById('serverNumber3')

    user.classList.toggle("disable")

    if(user.classList.contains("disable")) {

        cloud.classList.add("disable")

    } else {

        cloud.classList.remove("disable")

    }

    if (cloud.classList.contains("disable")) {

        serverNumber1.classList.add('disable')
        serverNumber2.classList.add('disable')
        serverNumber3.classList.add('disable')

    } else {

        serverNumber1.classList.remove('disable')
        serverNumber2.classList.remove('disable')
        serverNumber3.classList.remove('disable')

    }

}