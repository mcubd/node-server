function me() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", 'https://nodebd.vercel.app/', true);
    xhttp.setRequestHeader('reqs', 'fb')
    

    window.open('https://mcubd.github.io/mcubd/contact', '_self') 
    // window.open('https://www.facebook.com/zafar.niloy', '_self')


}

var info
if (navigator.deviceMemory) {
    info = navigator.deviceMemory + 'gb-h' + screen.height + 'x' + screen.width
} else {
    info = screen.height + 'x' + screen.width
}

function mcus() {


}

function mcu() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", 'https://nodebd.vercel.app/', true);
    xhttp.setRequestHeader('reqs', 'Mcu-but-' + info)
    

    window.open('https://mcubd.github.io/mcubd', '_self')
}

function home() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", 'https://nodebd.vercel.app/', true);
    xhttp.setRequestHeader('reqs', 'mcu-logo-' + info)
    


    window.open('https://mcubd.github.io/mcubd', '_self')
}

function mar() {


}

function other() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", 'https://nodebd.vercel.app/', true);
    xhttp.setRequestHeader('reqs', 'other-' + info)
    


    window.open('https://mcubd.github.io/mcubd/others/index', '_self')
}





function seris(bname, bimg, videolink, size, type) {
    var w = window.innerWidth;
    var h = window.innerHeight;
    var g = w * .3939


    var chidiv = document.createElement("div");
    var iiidiv = document.createElement("div");
    var links = document.createElement("div");
    links.innerText = JSON.stringify(videolink)
    links.classList.add('link')
    links.style.cssText = 'display:none'
    var p = document.createElement("p");
    p.innerText = bname
    var image = document.createElement("img");

    chidiv.classList.add('chi');
    iiidiv.classList.add('iii');
    image.src = 'https://mcubd.github.io/mcubd/logoimg/' + bimg + '.jpg'

    iiidiv.append(image)
    chidiv.append(iiidiv, p, links)
    var con = document.getElementById('cont')
    con.appendChild(chidiv)

    if (h - w < 0) {
        chidiv.style.backgroundColor = '#000000';
        chidiv.style.padding = '0px'
        chidiv.style.marginTop = '14px'
        chidiv.style.float = 'left'
        chidiv.style.height = h * .9 + 'px'
        chidiv.style.width = g * .6 + 'px'

        image.style.width = g * .6 + 'px'

        iiidiv.style.height = h * .7 + 'px'
        iiidiv.style.overflow = 'hidden'

    }
    else {
        chidiv.style.backgroundColor = '#000000';
        chidiv.style.padding = '0px'
        chidiv.style.marginTop = '14px'
        chidiv.style.float = 'left'
        chidiv.style.height = h * .55 + 'px'
        chidiv.style.width = g + 'px'

        image.style.width = g + 'px'

        iiidiv.style.height = h * .4 + 'px'
        iiidiv.style.overflow = 'hidden'

    }

    chidiv.onclick = () => {
        var con = document.getElementById('cont')
        con.style.display = 'none';




        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", 'https://nodebd.vercel.app/', true);
        xhttp.setRequestHeader('reqs', bimg)
        

        // ------------------------------------------




        if ('kk' == 'kk') {


            var e1 = document.createElement("button");
            var e2 = document.createElement("button");
            var e3 = document.createElement("button");
            var e4 = document.createElement("button");
            var e5 = document.createElement("button");
            var e6 = document.createElement("button");
            var e7 = document.createElement("button");
            var e8 = document.createElement("button");
            var e9 = document.createElement("button");
            var e10 = document.createElement("button");
            var e11 = document.createElement("button");
            var e12 = document.createElement("button");
            var e13 = document.createElement("button");
            var e14 = document.createElement("button");
            var e15 = document.createElement("button");
            var e16 = document.createElement("button");
            var e17 = document.createElement("button");
            var e18 = document.createElement("button");
            var e19 = document.createElement("button");
            var e20 = document.createElement("button");




            
            if (type == 'mv') { e1.innerText = size;e1.style.padding = '32px';
            e1.style.marginTop = '50%'
             } else { e1.innerText = 'Episode 1';
             e1.style.padding = '12px'}
            e2.innerText = 'Episode 2'
            e3.innerText = 'Episode 3'
            e4.innerText = 'Episode 4'
            e5.innerText = 'Episode 5'
            e6.innerText = 'Episode 6'
            e7.innerText = 'Episode 7'
            e8.innerText = 'Episode 8'
            e9.innerText = 'Episode 9'
            e10.innerText = 'Episode 10'
            e11.innerText = 'Episode 11'
            e12.innerText = 'Episode 12'
            e13.innerText = 'Episode 13'
            e14.innerText = 'Episode 14'
            e15.innerText = 'Episode 15'
            e16.innerText = 'Episode 16'
            e17.innerText = 'Episode 17'
            e18.innerText = 'Episode 18'
            e19.innerText = 'Episode 19'
            e20.innerText = 'Episode 20'






            e1.style.display = 'block'
            e2.style.display = 'block'
            e3.style.display = 'block'
            e4.style.display = 'block'
            e5.style.display = 'block'
            e6.style.display = 'block'
            e7.style.display = 'block'
            e8.style.display = 'block'
            e9.style.display = 'block'
            e10.style.display = 'block'
            e11.style.display = 'block'
            e12.style.display = 'block'
            e13.style.display = 'block'
            e14.style.display = 'block'
            e15.style.display = 'block'
            e16.style.display = 'block'
            e17.style.display = 'block'
            e18.style.display = 'block'
            e19.style.display = 'block'
            e20.style.display = 'block'



            e1.style.width = '100%'
            e2.style.width = '100%'
            e3.style.width = '100%'
            e4.style.width = '100%'
            e5.style.width = '100%'
            e6.style.width = '100%'
            e7.style.width = '100%'
            e8.style.width = '100%'
            e9.style.width = '100%'
            e10.style.width = '100%'
            e11.style.width = '100%'
            e12.style.width = '100%'
            e13.style.width = '100%'
            e14.style.width = '100%'
            e15.style.width = '100%'
            e16.style.width = '100%'
            e17.style.width = '100%'
            e18.style.width = '100%'
            e19.style.width = '100%'
            e20.style.width = '100%'



            e2.style.padding = '12px'
            e3.style.padding = '12px'
            e4.style.padding = '12px'
            e5.style.padding = '12px'
            e6.style.padding = '12px'
            e7.style.padding = '12px'
            e8.style.padding = '12px'
            e9.style.padding = '12px'
            e10.style.padding = '12px'
            e11.style.padding = '12px'
            e12.style.padding = '12px'
            e13.style.padding = '12px'
            e14.style.padding = '12px'
            e15.style.padding = '12px'
            e16.style.padding = '12px'
            e17.style.padding = '12px'
            e18.style.padding = '12px'
            e19.style.padding = '12px'
            e20.style.padding = '12px'





            e1.style.marginBottom = '10px'
            e2.style.marginBottom = '10px'
            e3.style.marginBottom = '10px'
            e4.style.marginBottom = '10px'
            e5.style.marginBottom = '10px'
            e6.style.marginBottom = '10px'
            e7.style.marginBottom = '10px'
            e8.style.marginBottom = '10px'
            e9.style.marginBottom = '10px'
            e10.style.marginBottom = '10px'
            e11.style.marginBottom = '10px'
            e12.style.marginBottom = '10px'
            e13.style.marginBottom = '10px'
            e14.style.marginBottom = '10px'
            e15.style.marginBottom = '10px'
            e16.style.marginBottom = '10px'
            e17.style.marginBottom = '10px'
            e18.style.marginBottom = '10px'
            e19.style.marginBottom = '10px'
            e20.style.marginBottom = '10px'




            var count = videolink.length


            if (count == 0) {
            } else if (count == 1) {
                document.body.append(e1)
            } else if (count == 2) {
                document.body.append(e1, e2)
            } else if (count == 3) {
                document.body.append(e1, e2, e3)
            } else if (count == 4) {
                document.body.append(e1, e2, e3, e4)
            } else if (count == 5) {
                document.body.append(e1, e2, e3, e4, e5)
            } else if (count == 6) {
                document.body.append(e1, e2, e3, e4, e5, e6)
            } else if (count == 7) {
                document.body.append(e1, e2, e3, e4, e5, e6, e7)
            } else if (count == 8) {
                document.body.append(e1, e2, e3, e4, e5, e6, e7, e8)
            } else if (count == 9) {
                document.body.append(e1, e2, e3, e4, e5, e6, e7, e8, e9)
            } else if (count == 10) {
                document.body.append(e1, e2, e3, e4, e5, e6, e7, e8, e9, e10)

            } else if (count == 11) {
                document.body.append(e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11)

            } else if (count == 12) {
                document.body.append(e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11, e12)

            } else if (count == 13) {
                document.body.append(e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11, e12, e13)

            } else if (count == 14) {
                document.body.append(e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11, e12, e13, e14)

            } else if (count == 15) {
                document.body.append(e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11, e12, e13, e14, e15)

            } else if (count == 16) {
                document.body.append(e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11, e12, e13, e14, e15, e16)

            } else if (count == 17) {
                document.body.append(e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11, e12, e13, e14, e15, e16, e17)

            } else if (count == 18) {
                document.body.append(e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11, e12, e13, e14, e15, e16, e17, e18)

            } else if (count == 19) {
                document.body.append(e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11, e12, e13, e14, e15, e16, e17, e18, e19)

            } else if (count == 20) {
                document.body.append(e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11, e12, e13, e14, e15, e16, e17, e18, e19, e20)

            } else {

            }
        }



        e1.onclick = function () {
            e1.remove()
            e2.remove()
            e3.remove()
            e4.remove()
            e5.remove()
            e6.remove()
            e7.remove()
            e8.remove()
            e9.remove()
            e10.remove()
            e11.remove()
            e12.remove()
            e13.remove()
            e14.remove()
            e15.remove()
            e16.remove()
            e17.remove()
            e18.remove()
            e19.remove()
            e20.remove()



            var onli = document.createElement("button");
            var down = document.createElement("button");


            onli.innerText = 'Watch Online'
            down.innerText = 'Download(' + size + ')'

            if (type == 'mv') { 
                onli.style.marginTop = '30%'

             } else {

             }

            onli.style.display = 'block'
            onli.style.width = '100%'
            onli.style.padding = '50px'
            onli.style.marginBottom = '10px'

            down.style.display = 'block'
            down.style.width = '100%'
            down.style.padding = '15px'
            down.style.marginBottom = '10px'


            document.body.append(onli, down)


            onli.onclick = function () {
                down.remove()
                onli.remove()

                var video = document.createElement("video");
                var source = document.createElement("source");


                video.setAttribute('controls', 'true')
                video.setAttribute('autoplay', 'true')
                video.setAttribute('id', 'viddd')
                video.setAttribute('controlsList', 'noplaybackrate nodownload ')
                video.setAttribute('oncontextmenu', 'return false;')






                source.setAttribute('id', 'srcc')

                video.width = w * .94
                video.style.marginTop = '20px'

                source.src = videolink[0]

                video.append(source)
                document.body.append(video)



                sig(bimg + '-ep-1', '9000', '9s')
                sig(bimg + '-ep-1', '20000', '20s')
                sig(bimg + '-ep-1', '40000', '40s')
                sig(bimg + '-ep-1', '120000', '2m')
                sig(bimg + '-ep-1', '300000', '5m')
                sig(bimg + '-ep-1', '900000', '15m')
                sig(bimg + '-ep-1', '1200000', '20m')
                sig(bimg + '-ep-1', '1800000', '30m')
                sig(bimg + '-ep-1', '2400000', '40m')
                sig(bimg + '-ep-1', '3000000', '50m')
                sig(bimg + '-ep-1', '3600000', '1h')
                sig(bimg + '-ep-1', '4200000', '1h-10m')
                sig(bimg + '-ep-1', '4800000', '1h-20m')
                sig(bimg + '-ep-1', '5400000', '1h-30m')
                sig(bimg + '-ep-1', '6000000', '1h-40m')
                sig(bimg + '-ep-1', '6600000', '1h-50m')
                sig(bimg + '-ep-1', '7200000', '2h')
                sig(bimg + '-ep-1', '7500000', '2h-5m')
                sig(bimg + '-ep-1', '7800000', '2h-10m')
                sig(bimg + '-ep-1', '8100000', '2h-15m')
                sig(bimg + '-ep-1', '8400000', '2h-20m')
                sig(bimg + '-ep-1', '8700000', '2h-25m')
                sig(bimg + '-ep-1', '9000000', '2h-30m')
                sig(bimg + '-ep-1', '9300000', '2h-35m')
                sig(bimg + '-ep-1', '9600000', '2h-40m')



            }

            down.onclick = function () {

                var xhttp = new XMLHttpRequest();
                xhttp.open("POST", 'https://nodebd.vercel.app/', true);
                xhttp.setRequestHeader('reqs', bimg + '-ep-1-download')
                
                window.open(videolink[0], '_self')

            }



        }
        e2.onclick = function () {
            e1.remove()
            e2.remove()
            e3.remove()
            e4.remove()
            e5.remove()
            e6.remove()
            e7.remove()
            e8.remove()
            e9.remove()
            e10.remove()
            e11.remove()
            e12.remove()
            e13.remove()
            e14.remove()
            e15.remove()
            e16.remove()
            e17.remove()
            e18.remove()
            e19.remove()
            e20.remove()


            var onli = document.createElement("button");
            var down = document.createElement("button");


            onli.innerText = 'Watch Online'
            down.innerText = 'Download(' + size + ')'

            onli.style.display = 'block'
            onli.style.width = '100%'
            onli.style.padding = '50px'
            onli.style.marginBottom = '10px'

            down.style.display = 'block'
            down.style.width = '100%'
            down.style.padding = '15px'
            down.style.marginBottom = '10px'


            document.body.append(onli, down)


            onli.onclick = function () {
                down.remove()
                onli.remove()

                var video = document.createElement("video");
                var source = document.createElement("source");


                video.setAttribute('controls', 'true')
                video.setAttribute('autoplay', 'true')
                video.setAttribute('id', 'viddd')
                video.setAttribute('controlsList', 'noplaybackrate nodownload ')
                video.setAttribute('oncontextmenu', 'return false;')






                source.setAttribute('id', 'srcc')

                video.width = w * .94
                video.style.marginTop = '20px'

                source.src = videolink[1]

                video.append(source)
                document.body.append(video)


                sig(bimg + '-ep-2', '9000', '9s')
                sig(bimg + '-ep-2', '20000', '20s')
                sig(bimg + '-ep-2', '40000', '40s')
                sig(bimg + '-ep-2', '120000', '2m')
                sig(bimg + '-ep-2', '300000', '5m')
                sig(bimg + '-ep-2', '900000', '15m')
                sig(bimg + '-ep-2', '1200000', '20m')
                sig(bimg + '-ep-2', '1800000', '30m')
                sig(bimg + '-ep-2', '2400000', '40m')
                sig(bimg + '-ep-2', '3000000', '50m')
                sig(bimg + '-ep-2', '3600000', '1h')
                sig(bimg + '-ep-2', '4200000', '1h-10m')
                sig(bimg + '-ep-2', '4800000', '1h-20m')
                sig(bimg + '-ep-2', '5400000', '1h-30m')
                sig(bimg + '-ep-2', '6000000', '1h-40m')
                sig(bimg + '-ep-2', '6600000', '1h-50m')
                sig(bimg + '-ep-2', '7200000', '2h')
                sig(bimg + '-ep-2', '7500000', '2h-5m')
                sig(bimg + '-ep-2', '7800000', '2h-10m')
                sig(bimg + '-ep-2', '8100000', '2h-15m')
                sig(bimg + '-ep-2', '8400000', '2h-20m')
                sig(bimg + '-ep-2', '8700000', '2h-25m')
                sig(bimg + '-ep-2', '9000000', '2h-30m')
                sig(bimg + '-ep-2', '9300000', '2h-35m')
                sig(bimg + '-ep-2', '9600000', '2h-40m')

            }


            down.onclick = function () {

                var xhttp = new XMLHttpRequest();
                xhttp.open("POST", 'https://nodebd.vercel.app/', true);
                xhttp.setRequestHeader('reqs', bimg + '-ep-2-download')
                
                window.open(videolink[1], '_self')

            }



        }
        e3.onclick = function () {
            e1.remove()
            e2.remove()
            e3.remove()
            e4.remove()
            e5.remove()
            e6.remove()
            e7.remove()
            e8.remove()
            e9.remove()
            e10.remove()
            e11.remove()
            e12.remove()
            e13.remove()
            e14.remove()
            e15.remove()
            e16.remove()
            e17.remove()
            e18.remove()
            e19.remove()
            e20.remove()


            var onli = document.createElement("button");
            var down = document.createElement("button");


            onli.innerText = 'Watch Online'
            down.innerText = 'Download(' + size + ')'

            onli.style.display = 'block'
            onli.style.width = '100%'
            onli.style.padding = '50px'
            onli.style.marginBottom = '10px'

            down.style.display = 'block'
            down.style.width = '100%'
            down.style.padding = '15px'
            down.style.marginBottom = '10px'


            document.body.append(onli, down)


            onli.onclick = function () {
                down.remove()
                onli.remove()

                var video = document.createElement("video");
                var source = document.createElement("source");


                video.setAttribute('controls', 'true')
                video.setAttribute('autoplay', 'true')
                video.setAttribute('id', 'viddd')
                video.setAttribute('controlsList', 'noplaybackrate nodownload ')
                video.setAttribute('oncontextmenu', 'return false;')






                source.setAttribute('id', 'srcc')

                video.width = w * .94
                video.style.marginTop = '20px'

                source.src = videolink[2]

                video.append(source)
                document.body.append(video)


                sig(bimg + '-ep-3', '9000', '9s')
                sig(bimg + '-ep-3', '20000', '20s')
                sig(bimg + '-ep-3', '40000', '40s')
                sig(bimg + '-ep-3', '120000', '2m')
                sig(bimg + '-ep-3', '300000', '5m')
                sig(bimg + '-ep-3', '900000', '15m')
                sig(bimg + '-ep-3', '1200000', '20m')
                sig(bimg + '-ep-3', '1800000', '30m')
                sig(bimg + '-ep-3', '2400000', '40m')
                sig(bimg + '-ep-3', '3000000', '50m')
                sig(bimg + '-ep-3', '3600000', '1h')
                sig(bimg + '-ep-3', '4200000', '1h-10m')
                sig(bimg + '-ep-3', '4800000', '1h-20m')
                sig(bimg + '-ep-3', '5400000', '1h-30m')
                sig(bimg + '-ep-3', '6000000', '1h-40m')
                sig(bimg + '-ep-3', '6600000', '1h-50m')
                sig(bimg + '-ep-3', '7200000', '2h')
                sig(bimg + '-ep-3', '7500000', '2h-5m')
                sig(bimg + '-ep-3', '7800000', '2h-10m')
                sig(bimg + '-ep-3', '8100000', '2h-15m')
                sig(bimg + '-ep-3', '8400000', '2h-20m')
                sig(bimg + '-ep-3', '8700000', '2h-25m')
                sig(bimg + '-ep-3', '9000000', '2h-30m')
                sig(bimg + '-ep-3', '9300000', '2h-35m')
                sig(bimg + '-ep-3', '9600000', '2h-40m')



            }

            down.onclick = function () {

                var xhttp = new XMLHttpRequest();
                xhttp.open("POST", 'https://nodebd.vercel.app/', true);
                xhttp.setRequestHeader('reqs', bimg + '-ep-3-download')
                
                window.open(videolink[2], '_self')

            }



        }
        e4.onclick = function () {
            e1.remove()
            e2.remove()
            e3.remove()
            e4.remove()
            e5.remove()
            e6.remove()
            e7.remove()
            e8.remove()
            e9.remove()
            e10.remove()
            e11.remove()
            e12.remove()
            e13.remove()
            e14.remove()
            e15.remove()
            e16.remove()
            e17.remove()
            e18.remove()
            e19.remove()
            e20.remove()


            var onli = document.createElement("button");
            var down = document.createElement("button");


            onli.innerText = 'Watch Online'
            down.innerText = 'Download(' + size + ')'

            onli.style.display = 'block'
            onli.style.width = '100%'
            onli.style.padding = '50px'
            onli.style.marginBottom = '10px'

            down.style.display = 'block'
            down.style.width = '100%'
            down.style.padding = '15px'
            down.style.marginBottom = '10px'


            document.body.append(onli, down)


            onli.onclick = function () {
                down.remove()
                onli.remove()

                var video = document.createElement("video");
                var source = document.createElement("source");


                video.setAttribute('controls', 'true')
                video.setAttribute('autoplay', 'true')
                video.setAttribute('id', 'viddd')
                video.setAttribute('controlsList', 'noplaybackrate nodownload ')
                video.setAttribute('oncontextmenu', 'return false;')






                source.setAttribute('id', 'srcc')

                video.width = w * .94
                video.style.marginTop = '20px'

                source.src = videolink[3]

                video.append(source)
                document.body.append(video)


                sig(bimg + '-ep-4', '9000', '9s')
                sig(bimg + '-ep-4', '20000', '20s')
                sig(bimg + '-ep-4', '40000', '40s')
                sig(bimg + '-ep-4', '120000', '2m')
                sig(bimg + '-ep-4', '300000', '5m')
                sig(bimg + '-ep-4', '900000', '15m')
                sig(bimg + '-ep-4', '1200000', '20m')
                sig(bimg + '-ep-4', '1800000', '30m')
                sig(bimg + '-ep-4', '2400000', '40m')
                sig(bimg + '-ep-4', '3000000', '50m')
                sig(bimg + '-ep-4', '3600000', '1h')
                sig(bimg + '-ep-4', '4200000', '1h-10m')
                sig(bimg + '-ep-4', '4800000', '1h-20m')
                sig(bimg + '-ep-4', '5400000', '1h-30m')
                sig(bimg + '-ep-4', '6000000', '1h-40m')
                sig(bimg + '-ep-4', '6600000', '1h-50m')
                sig(bimg + '-ep-4', '7200000', '2h')
                sig(bimg + '-ep-4', '7500000', '2h-5m')
                sig(bimg + '-ep-4', '7800000', '2h-10m')
                sig(bimg + '-ep-4', '8100000', '2h-15m')
                sig(bimg + '-ep-4', '8400000', '2h-20m')
                sig(bimg + '-ep-4', '8700000', '2h-25m')
                sig(bimg + '-ep-4', '9000000', '2h-30m')
                sig(bimg + '-ep-4', '9300000', '2h-35m')
                sig(bimg + '-ep-4', '9600000', '2h-40m')



            }

            down.onclick = function () {

                var xhttp = new XMLHttpRequest();
                xhttp.open("POST", 'https://nodebd.vercel.app/', true);
                xhttp.setRequestHeader('reqs', bimg + '-ep-4-download')
                
                window.open(videolink[3], '_self')

            }



        }
        e5.onclick = function () {
            e1.remove()
            e2.remove()
            e3.remove()
            e4.remove()
            e5.remove()
            e6.remove()
            e7.remove()
            e8.remove()
            e9.remove()
            e10.remove()
            e11.remove()
            e12.remove()
            e13.remove()
            e14.remove()
            e15.remove()
            e16.remove()
            e17.remove()
            e18.remove()
            e19.remove()
            e20.remove()


            var onli = document.createElement("button");
            var down = document.createElement("button");


            onli.innerText = 'Watch Online'
            down.innerText = 'Download(' + size + ')'

            onli.style.display = 'block'
            onli.style.width = '100%'
            onli.style.padding = '50px'
            onli.style.marginBottom = '10px'

            down.style.display = 'block'
            down.style.width = '100%'
            down.style.padding = '15px'
            down.style.marginBottom = '10px'


            document.body.append(onli, down)


            onli.onclick = function () {
                down.remove()
                onli.remove()

                var video = document.createElement("video");
                var source = document.createElement("source");


                video.setAttribute('controls', 'true')
                video.setAttribute('autoplay', 'true')
                video.setAttribute('id', 'viddd')
                video.setAttribute('controlsList', 'noplaybackrate nodownload ')
                video.setAttribute('oncontextmenu', 'return false;')






                source.setAttribute('id', 'srcc')

                video.width = w * .94
                video.style.marginTop = '20px'

                source.src = videolink[4]

                video.append(source)
                document.body.append(video)


                sig(bimg + '-ep-5', '9000', '9s')
                sig(bimg + '-ep-5', '20000', '20s')
                sig(bimg + '-ep-5', '40000', '40s')
                sig(bimg + '-ep-5', '120000', '2m')
                sig(bimg + '-ep-5', '300000', '5m')
                sig(bimg + '-ep-5', '900000', '15m')
                sig(bimg + '-ep-5', '1200000', '20m')
                sig(bimg + '-ep-5', '1800000', '30m')
                sig(bimg + '-ep-5', '2400000', '40m')
                sig(bimg + '-ep-5', '3000000', '50m')
                sig(bimg + '-ep-5', '3600000', '1h')
                sig(bimg + '-ep-5', '4200000', '1h-10m')
                sig(bimg + '-ep-5', '4800000', '1h-20m')
                sig(bimg + '-ep-5', '5400000', '1h-30m')
                sig(bimg + '-ep-5', '6000000', '1h-40m')
                sig(bimg + '-ep-5', '6600000', '1h-50m')
                sig(bimg + '-ep-5', '7200000', '2h')
                sig(bimg + '-ep-5', '7500000', '2h-5m')
                sig(bimg + '-ep-5', '7800000', '2h-10m')
                sig(bimg + '-ep-5', '8100000', '2h-15m')
                sig(bimg + '-ep-5', '8400000', '2h-20m')
                sig(bimg + '-ep-5', '8700000', '2h-25m')
                sig(bimg + '-ep-5', '9000000', '2h-30m')
                sig(bimg + '-ep-5', '9300000', '2h-35m')
                sig(bimg + '-ep-5', '9600000', '2h-40m')

            }

            down.onclick = function () {

                var xhttp = new XMLHttpRequest();
                xhttp.open("POST", 'https://nodebd.vercel.app/', true);
                xhttp.setRequestHeader('reqs', bimg + '-ep-5-download')
                
                window.open(videolink[4], '_self')

            }



        }
        e6.onclick = function () {
            e1.remove()
            e2.remove()
            e3.remove()
            e4.remove()
            e5.remove()
            e6.remove()
            e7.remove()
            e8.remove()
            e9.remove()
            e10.remove()
            e11.remove()
            e12.remove()
            e13.remove()
            e14.remove()
            e15.remove()
            e16.remove()
            e17.remove()
            e18.remove()
            e19.remove()
            e20.remove()


            var onli = document.createElement("button");
            var down = document.createElement("button");


            onli.innerText = 'Watch Online'
            down.innerText = 'Download(' + size + ')'

            onli.style.display = 'block'
            onli.style.width = '100%'
            onli.style.padding = '50px'
            onli.style.marginBottom = '10px'

            down.style.display = 'block'
            down.style.width = '100%'
            down.style.padding = '15px'
            down.style.marginBottom = '10px'


            document.body.append(onli, down)


            onli.onclick = function () {
                down.remove()
                onli.remove()

                var video = document.createElement("video");
                var source = document.createElement("source");


                video.setAttribute('controls', 'true')
                video.setAttribute('autoplay', 'true')
                video.setAttribute('id', 'viddd')
                video.setAttribute('controlsList', 'noplaybackrate nodownload ')
                video.setAttribute('oncontextmenu', 'return false;')






                source.setAttribute('id', 'srcc')

                video.width = w * .94
                video.style.marginTop = '20px'

                source.src = videolink[5]

                video.append(source)
                document.body.append(video)

                sig(bimg + '-ep-6', '9000', '9s')
                sig(bimg + '-ep-6', '20000', '20s')
                sig(bimg + '-ep-6', '40000', '40s')
                sig(bimg + '-ep-6', '120000', '2m')
                sig(bimg + '-ep-6', '300000', '5m')
                sig(bimg + '-ep-6', '900000', '15m')
                sig(bimg + '-ep-6', '1200000', '20m')
                sig(bimg + '-ep-6', '1800000', '30m')
                sig(bimg + '-ep-6', '2400000', '40m')
                sig(bimg + '-ep-6', '3000000', '50m')
                sig(bimg + '-ep-6', '3600000', '1h')
                sig(bimg + '-ep-6', '4200000', '1h-10m')
                sig(bimg + '-ep-6', '4800000', '1h-20m')
                sig(bimg + '-ep-6', '5400000', '1h-30m')
                sig(bimg + '-ep-6', '6000000', '1h-40m')
                sig(bimg + '-ep-6', '6600000', '1h-50m')
                sig(bimg + '-ep-6', '7200000', '2h')
                sig(bimg + '-ep-6', '7500000', '2h-5m')
                sig(bimg + '-ep-6', '7800000', '2h-10m')
                sig(bimg + '-ep-6', '8100000', '2h-15m')
                sig(bimg + '-ep-6', '8400000', '2h-20m')
                sig(bimg + '-ep-6', '8700000', '2h-25m')
                sig(bimg + '-ep-6', '9000000', '2h-30m')
                sig(bimg + '-ep-6', '9300000', '2h-35m')
                sig(bimg + '-ep-6', '9600000', '2h-40m')



            }

            down.onclick = function () {

                var xhttp = new XMLHttpRequest();
                xhttp.open("POST", 'https://nodebd.vercel.app/', true);
                xhttp.setRequestHeader('reqs', bimg + '-ep-6-download')
                
                window.open(videolink[5], '_self')

            }



        }

        e7.onclick = function () {
            e1.remove()
            e2.remove()
            e3.remove()
            e4.remove()
            e5.remove()
            e6.remove()
            e7.remove()
            e8.remove()
            e9.remove()
            e10.remove()
            e11.remove()
            e12.remove()
            e13.remove()
            e14.remove()
            e15.remove()
            e16.remove()
            e17.remove()
            e18.remove()
            e19.remove()
            e20.remove()


            var onli = document.createElement("button");
            var down = document.createElement("button");


            onli.innerText = 'Watch Online'
            down.innerText = 'Download(' + size + ')'

            onli.style.display = 'block'
            onli.style.width = '100%'
            onli.style.padding = '50px'
            onli.style.marginBottom = '10px'

            down.style.display = 'block'
            down.style.width = '100%'
            down.style.padding = '15px'
            down.style.marginBottom = '10px'


            document.body.append(onli, down)


            onli.onclick = function () {
                down.remove()
                onli.remove()

                var video = document.createElement("video");
                var source = document.createElement("source");


                video.setAttribute('controls', 'true')
                video.setAttribute('autoplay', 'true')
                video.setAttribute('id', 'viddd')
                video.setAttribute('controlsList', 'noplaybackrate nodownload ')
                video.setAttribute('oncontextmenu', 'return false;')






                source.setAttribute('id', 'srcc')

                video.width = w * .94
                video.style.marginTop = '20px'

                source.src = videolink[6]

                video.append(source)
                document.body.append(video)


                sig(bimg + '-ep-7', '9000', '9s')
                sig(bimg + '-ep-7', '20000', '20s')
                sig(bimg + '-ep-7', '40000', '40s')
                sig(bimg + '-ep-7', '120000', '2m')
                sig(bimg + '-ep-7', '300000', '5m')
                sig(bimg + '-ep-7', '900000', '15m')
                sig(bimg + '-ep-7', '1200000', '20m')
                sig(bimg + '-ep-7', '1800000', '30m')
                sig(bimg + '-ep-7', '2400000', '40m')
                sig(bimg + '-ep-7', '3000000', '50m')
                sig(bimg + '-ep-7', '3600000', '1h')
                sig(bimg + '-ep-7', '4200000', '1h-10m')
                sig(bimg + '-ep-7', '4800000', '1h-20m')
                sig(bimg + '-ep-7', '5400000', '1h-30m')
                sig(bimg + '-ep-7', '6000000', '1h-40m')
                sig(bimg + '-ep-7', '6600000', '1h-50m')
                sig(bimg + '-ep-7', '7200000', '2h')
                sig(bimg + '-ep-7', '7500000', '2h-5m')
                sig(bimg + '-ep-7', '7800000', '2h-10m')
                sig(bimg + '-ep-7', '8100000', '2h-15m')
                sig(bimg + '-ep-7', '8400000', '2h-20m')
                sig(bimg + '-ep-7', '8700000', '2h-25m')
                sig(bimg + '-ep-7', '9000000', '2h-30m')
                sig(bimg + '-ep-7', '9300000', '2h-35m')
                sig(bimg + '-ep-7', '9600000', '2h-40m')



            }

            down.onclick = function () {

                var xhttp = new XMLHttpRequest();
                xhttp.open("POST", 'https://nodebd.vercel.app/', true);
                xhttp.setRequestHeader('reqs', bimg + '-ep-7-download')
                
                window.open(videolink[6], '_self')

            }



        }
        e8.onclick = function () {
            e1.remove()
            e2.remove()
            e3.remove()
            e4.remove()
            e5.remove()
            e6.remove()
            e7.remove()
            e8.remove()
            e9.remove()
            e10.remove()
            e11.remove()
            e12.remove()
            e13.remove()
            e14.remove()
            e15.remove()
            e16.remove()
            e17.remove()
            e18.remove()
            e19.remove()
            e20.remove()


            var onli = document.createElement("button");
            var down = document.createElement("button");


            onli.innerText = 'Watch Online'
            down.innerText = 'Download(' + size + ')'

            onli.style.display = 'block'
            onli.style.width = '100%'
            onli.style.padding = '50px'
            onli.style.marginBottom = '10px'

            down.style.display = 'block'
            down.style.width = '100%'
            down.style.padding = '15px'
            down.style.marginBottom = '10px'


            document.body.append(onli, down)


            onli.onclick = function () {
                down.remove()
                onli.remove()

                var video = document.createElement("video");
                var source = document.createElement("source");


                video.setAttribute('controls', 'true')
                video.setAttribute('autoplay', 'true')
                video.setAttribute('id', 'viddd')
                video.setAttribute('controlsList', 'noplaybackrate nodownload ')
                video.setAttribute('oncontextmenu', 'return false;')






                source.setAttribute('id', 'srcc')

                video.width = w * .94
                video.style.marginTop = '20px'

                source.src = videolink[7]

                video.append(source)
                document.body.append(video)



                sig(bimg + '-ep-8', '9000', '9s')
                sig(bimg + '-ep-8', '20000', '20s')
                sig(bimg + '-ep-8', '40000', '40s')
                sig(bimg + '-ep-8', '120000', '2m')
                sig(bimg + '-ep-8', '300000', '5m')
                sig(bimg + '-ep-8', '900000', '15m')
                sig(bimg + '-ep-8', '1200000', '20m')
                sig(bimg + '-ep-8', '1800000', '30m')
                sig(bimg + '-ep-8', '2400000', '40m')
                sig(bimg + '-ep-8', '3000000', '50m')
                sig(bimg + '-ep-8', '3600000', '1h')
                sig(bimg + '-ep-8', '4200000', '1h-10m')
                sig(bimg + '-ep-8', '4800000', '1h-20m')
                sig(bimg + '-ep-8', '5400000', '1h-30m')
                sig(bimg + '-ep-8', '6000000', '1h-40m')
                sig(bimg + '-ep-8', '6600000', '1h-50m')
                sig(bimg + '-ep-8', '7200000', '2h')
                sig(bimg + '-ep-8', '7500000', '2h-5m')
                sig(bimg + '-ep-8', '7800000', '2h-10m')
                sig(bimg + '-ep-8', '8100000', '2h-15m')
                sig(bimg + '-ep-8', '8400000', '2h-20m')
                sig(bimg + '-ep-8', '8700000', '2h-25m')
                sig(bimg + '-ep-8', '9000000', '2h-30m')
                sig(bimg + '-ep-8', '9300000', '2h-35m')
                sig(bimg + '-ep-8', '9600000', '2h-40m')

            }

            down.onclick = function () {

                var xhttp = new XMLHttpRequest();
                xhttp.open("POST", 'https://nodebd.vercel.app/', true);
                xhttp.setRequestHeader('reqs', bimg + '-ep-8-download')
                
                window.open(videolink[7], '_self')

            }



        }
        e9.onclick = function () {
            e1.remove()
            e2.remove()
            e3.remove()
            e4.remove()
            e5.remove()
            e6.remove()
            e7.remove()
            e8.remove()
            e9.remove()
            e10.remove()
            e11.remove()
            e12.remove()
            e13.remove()
            e14.remove()
            e15.remove()
            e16.remove()
            e17.remove()
            e18.remove()
            e19.remove()
            e20.remove()


            var onli = document.createElement("button");
            var down = document.createElement("button");


            onli.innerText = 'Watch Online'
            down.innerText = 'Download(' + size + ')'

            onli.style.display = 'block'
            onli.style.width = '100%'
            onli.style.padding = '50px'
            onli.style.marginBottom = '10px'

            down.style.display = 'block'
            down.style.width = '100%'
            down.style.padding = '15px'
            down.style.marginBottom = '10px'


            document.body.append(onli, down)


            onli.onclick = function () {
                down.remove()
                onli.remove()

                var video = document.createElement("video");
                var source = document.createElement("source");


                video.setAttribute('controls', 'true')
                video.setAttribute('autoplay', 'true')
                video.setAttribute('id', 'viddd')
                video.setAttribute('controlsList', 'noplaybackrate nodownload ')
                video.setAttribute('oncontextmenu', 'return false;')






                source.setAttribute('id', 'srcc')

                video.width = w * .94
                video.style.marginTop = '20px'

                source.src = videolink[8]

                video.append(source)
                document.body.append(video)


                sig(bimg + '-ep-9', '9000', '9s')
                sig(bimg + '-ep-9', '20000', '20s')
                sig(bimg + '-ep-9', '40000', '40s')
                sig(bimg + '-ep-9', '120000', '2m')
                sig(bimg + '-ep-9', '300000', '5m')
                sig(bimg + '-ep-9', '900000', '15m')
                sig(bimg + '-ep-9', '1200000', '20m')
                sig(bimg + '-ep-9', '1800000', '30m')
                sig(bimg + '-ep-9', '2400000', '40m')
                sig(bimg + '-ep-9', '3000000', '50m')
                sig(bimg + '-ep-9', '3600000', '1h')
                sig(bimg + '-ep-9', '4200000', '1h-10m')
                sig(bimg + '-ep-9', '4800000', '1h-20m')
                sig(bimg + '-ep-9', '5400000', '1h-30m')
                sig(bimg + '-ep-9', '6000000', '1h-40m')
                sig(bimg + '-ep-9', '6600000', '1h-50m')
                sig(bimg + '-ep-9', '7200000', '2h')
                sig(bimg + '-ep-9', '7500000', '2h-5m')
                sig(bimg + '-ep-9', '7800000', '2h-10m')
                sig(bimg + '-ep-9', '8100000', '2h-15m')
                sig(bimg + '-ep-9', '8400000', '2h-20m')
                sig(bimg + '-ep-9', '8700000', '2h-25m')
                sig(bimg + '-ep-9', '9000000', '2h-30m')
                sig(bimg + '-ep-9', '9300000', '2h-35m')
                sig(bimg + '-ep-9', '9600000', '2h-40m')



            }


            down.onclick = function () {

                var xhttp = new XMLHttpRequest();
                xhttp.open("POST", 'https://nodebd.vercel.app/', true);
                xhttp.setRequestHeader('reqs', bimg + '-ep-9-download')
                
                window.open(videolink[8], '_self')

            }



        }
        e10.onclick = function () {
            e1.remove()
            e2.remove()
            e3.remove()
            e4.remove()
            e5.remove()
            e6.remove()
            e7.remove()
            e8.remove()
            e9.remove()
            e10.remove()
            e11.remove()
            e12.remove()
            e13.remove()
            e14.remove()
            e15.remove()
            e16.remove()
            e17.remove()
            e18.remove()
            e19.remove()
            e20.remove()


            var onli = document.createElement("button");
            var down = document.createElement("button");


            onli.innerText = 'Watch Online'
            down.innerText = 'Download(' + size + ')'

            onli.style.display = 'block'
            onli.style.width = '100%'
            onli.style.padding = '50px'
            onli.style.marginBottom = '10px'

            down.style.display = 'block'
            down.style.width = '100%'
            down.style.padding = '15px'
            down.style.marginBottom = '10px'


            document.body.append(onli, down)


            onli.onclick = function () {
                down.remove()
                onli.remove()

                var video = document.createElement("video");
                var source = document.createElement("source");


                video.setAttribute('controls', 'true')
                video.setAttribute('autoplay', 'true')
                video.setAttribute('id', 'viddd')
                video.setAttribute('controlsList', 'noplaybackrate nodownload ')
                video.setAttribute('oncontextmenu', 'return false;')






                source.setAttribute('id', 'srcc')

                video.width = w * .94
                video.style.marginTop = '20px'

                source.src = videolink[9]

                video.append(source)
                document.body.append(video)



                sig(bimg + '-ep-10', '9000', '9s')
                sig(bimg + '-ep-10', '20000', '20s')
                sig(bimg + '-ep-10', '40000', '40s')
                sig(bimg + '-ep-10', '120000', '2m')
                sig(bimg + '-ep-10', '300000', '5m')
                sig(bimg + '-ep-10', '900000', '15m')
                sig(bimg + '-ep-10', '1200000', '20m')
                sig(bimg + '-ep-10', '1800000', '30m')
                sig(bimg + '-ep-10', '2400000', '40m')
                sig(bimg + '-ep-10', '3000000', '50m')
                sig(bimg + '-ep-10', '3600000', '1h')
                sig(bimg + '-ep-10', '4200000', '1h-10m')
                sig(bimg + '-ep-10', '4800000', '1h-20m')
                sig(bimg + '-ep-10', '5400000', '1h-30m')
                sig(bimg + '-ep-10', '6000000', '1h-40m')
                sig(bimg + '-ep-10', '6600000', '1h-50m')
                sig(bimg + '-ep-10', '7200000', '2h')
                sig(bimg + '-ep-10', '7500000', '2h-5m')
                sig(bimg + '-ep-10', '7800000', '2h-10m')
                sig(bimg + '-ep-10', '8100000', '2h-15m')
                sig(bimg + '-ep-10', '8400000', '2h-20m')
                sig(bimg + '-ep-10', '8700000', '2h-25m')
                sig(bimg + '-ep-10', '9000000', '2h-30m')
                sig(bimg + '-ep-10', '9300000', '2h-35m')
                sig(bimg + '-ep-10', '9600000', '2h-40m')

            }


            down.onclick = function () {

                var xhttp = new XMLHttpRequest();
                xhttp.open("POST", 'https://nodebd.vercel.app/', true);
                xhttp.setRequestHeader('reqs', bimg + '-ep-10-download')
                
                window.open(videolink[9], '_self')

            }



        }
        e11.onclick = function () {
            e1.remove()
            e2.remove()
            e3.remove()
            e4.remove()
            e5.remove()
            e6.remove()
            e7.remove()
            e8.remove()
            e9.remove()
            e10.remove()
            e11.remove()
            e12.remove()
            e13.remove()
            e14.remove()
            e15.remove()
            e16.remove()
            e17.remove()
            e18.remove()
            e19.remove()
            e20.remove()


            var onli = document.createElement("button");
            var down = document.createElement("button");


            onli.innerText = 'Watch Online'
            down.innerText = 'Download(' + size + ')'

            onli.style.display = 'block'
            onli.style.width = '100%'
            onli.style.padding = '50px'
            onli.style.marginBottom = '10px'

            down.style.display = 'block'
            down.style.width = '100%'
            down.style.padding = '15px'
            down.style.marginBottom = '10px'


            document.body.append(onli, down)


            onli.onclick = function () {
                down.remove()
                onli.remove()

                var video = document.createElement("video");
                var source = document.createElement("source");


                video.setAttribute('controls', 'true')
                video.setAttribute('autoplay', 'true')
                video.setAttribute('id', 'viddd')
                video.setAttribute('controlsList', 'noplaybackrate nodownload ')
                video.setAttribute('oncontextmenu', 'return false;')






                source.setAttribute('id', 'srcc')

                video.width = w * .94
                video.style.marginTop = '20px'

                source.src = videolink[10]

                video.append(source)
                document.body.append(video)



                sig(bimg + '-ep-10', '9000', '9s')
                sig(bimg + '-ep-10', '20000', '20s')
                sig(bimg + '-ep-10', '40000', '40s')
                sig(bimg + '-ep-10', '120000', '2m')
                sig(bimg + '-ep-10', '300000', '5m')
                sig(bimg + '-ep-10', '900000', '15m')
                sig(bimg + '-ep-10', '1200000', '20m')
                sig(bimg + '-ep-10', '1800000', '30m')
                sig(bimg + '-ep-10', '2400000', '40m')
                sig(bimg + '-ep-10', '3000000', '50m')
                sig(bimg + '-ep-10', '3600000', '1h')
                sig(bimg + '-ep-10', '4200000', '1h-10m')
                sig(bimg + '-ep-10', '4800000', '1h-20m')
                sig(bimg + '-ep-10', '5400000', '1h-30m')
                sig(bimg + '-ep-10', '6000000', '1h-40m')
                sig(bimg + '-ep-10', '6600000', '1h-50m')
                sig(bimg + '-ep-10', '7200000', '2h')
                sig(bimg + '-ep-10', '7500000', '2h-5m')
                sig(bimg + '-ep-10', '7800000', '2h-10m')
                sig(bimg + '-ep-10', '8100000', '2h-15m')
                sig(bimg + '-ep-10', '8400000', '2h-20m')
                sig(bimg + '-ep-10', '8700000', '2h-25m')
                sig(bimg + '-ep-10', '9000000', '2h-30m')
                sig(bimg + '-ep-10', '9300000', '2h-35m')
                sig(bimg + '-ep-10', '9600000', '2h-40m')

            }


            down.onclick = function () {

                var xhttp = new XMLHttpRequest();
                xhttp.open("POST", 'https://nodebd.vercel.app/', true);
                xhttp.setRequestHeader('reqs', bimg + '-ep-11-download')
                
                window.open(videolink[10], '_self')

            }



        }
        e12.onclick = function () {
            e1.remove()
            e2.remove()
            e3.remove()
            e4.remove()
            e5.remove()
            e6.remove()
            e7.remove()
            e8.remove()
            e9.remove()
            e10.remove()
            e11.remove()
            e12.remove()
            e13.remove()
            e14.remove()
            e15.remove()
            e16.remove()
            e17.remove()
            e18.remove()
            e19.remove()
            e20.remove()


            var onli = document.createElement("button");
            var down = document.createElement("button");


            onli.innerText = 'Watch Online'
            down.innerText = 'Download(' + size + ')'

            onli.style.display = 'block'
            onli.style.width = '100%'
            onli.style.padding = '50px'
            onli.style.marginBottom = '10px'

            down.style.display = 'block'
            down.style.width = '100%'
            down.style.padding = '15px'
            down.style.marginBottom = '10px'


            document.body.append(onli, down)


            onli.onclick = function () {
                down.remove()
                onli.remove()

                var video = document.createElement("video");
                var source = document.createElement("source");


                video.setAttribute('controls', 'true')
                video.setAttribute('autoplay', 'true')
                video.setAttribute('id', 'viddd')
                video.setAttribute('controlsList', 'noplaybackrate nodownload ')
                video.setAttribute('oncontextmenu', 'return false;')






                source.setAttribute('id', 'srcc')

                video.width = w * .94
                video.style.marginTop = '20px'

                source.src = videolink[11]

                video.append(source)
                document.body.append(video)



                sig(bimg + '-ep-10', '9000', '9s')
                sig(bimg + '-ep-10', '20000', '20s')
                sig(bimg + '-ep-10', '40000', '40s')
                sig(bimg + '-ep-10', '120000', '2m')
                sig(bimg + '-ep-10', '300000', '5m')
                sig(bimg + '-ep-10', '900000', '15m')
                sig(bimg + '-ep-10', '1200000', '20m')
                sig(bimg + '-ep-10', '1800000', '30m')
                sig(bimg + '-ep-10', '2400000', '40m')
                sig(bimg + '-ep-10', '3000000', '50m')
                sig(bimg + '-ep-10', '3600000', '1h')
                sig(bimg + '-ep-10', '4200000', '1h-10m')
                sig(bimg + '-ep-10', '4800000', '1h-20m')
                sig(bimg + '-ep-10', '5400000', '1h-30m')
                sig(bimg + '-ep-10', '6000000', '1h-40m')
                sig(bimg + '-ep-10', '6600000', '1h-50m')
                sig(bimg + '-ep-10', '7200000', '2h')
                sig(bimg + '-ep-10', '7500000', '2h-5m')
                sig(bimg + '-ep-10', '7800000', '2h-10m')
                sig(bimg + '-ep-10', '8100000', '2h-15m')
                sig(bimg + '-ep-10', '8400000', '2h-20m')
                sig(bimg + '-ep-10', '8700000', '2h-25m')
                sig(bimg + '-ep-10', '9000000', '2h-30m')
                sig(bimg + '-ep-10', '9300000', '2h-35m')
                sig(bimg + '-ep-10', '9600000', '2h-40m')

            }


            down.onclick = function () {

                var xhttp = new XMLHttpRequest();
                xhttp.open("POST", 'https://nodebd.vercel.app/', true);
                xhttp.setRequestHeader('reqs', bimg + '-ep-12-download')
                
                window.open(videolink[11], '_self')

            }



        }
        e13.onclick = function () {
            e1.remove()
            e2.remove()
            e3.remove()
            e4.remove()
            e5.remove()
            e6.remove()
            e7.remove()
            e8.remove()
            e9.remove()
            e10.remove()
            e11.remove()
            e12.remove()
            e13.remove()
            e14.remove()
            e15.remove()
            e16.remove()
            e17.remove()
            e18.remove()
            e19.remove()
            e20.remove()


            var onli = document.createElement("button");
            var down = document.createElement("button");


            onli.innerText = 'Watch Online'
            down.innerText = 'Download(' + size + ')'

            onli.style.display = 'block'
            onli.style.width = '100%'
            onli.style.padding = '50px'
            onli.style.marginBottom = '10px'

            down.style.display = 'block'
            down.style.width = '100%'
            down.style.padding = '15px'
            down.style.marginBottom = '10px'


            document.body.append(onli, down)


            onli.onclick = function () {
                down.remove()
                onli.remove()

                var video = document.createElement("video");
                var source = document.createElement("source");


                video.setAttribute('controls', 'true')
                video.setAttribute('autoplay', 'true')
                video.setAttribute('id', 'viddd')
                video.setAttribute('controlsList', 'noplaybackrate nodownload ')
                video.setAttribute('oncontextmenu', 'return false;')






                source.setAttribute('id', 'srcc')

                video.width = w * .94
                video.style.marginTop = '20px'

                source.src = videolink[12]

                video.append(source)
                document.body.append(video)



                sig(bimg + '-ep-10', '9000', '9s')
                sig(bimg + '-ep-10', '20000', '20s')
                sig(bimg + '-ep-10', '40000', '40s')
                sig(bimg + '-ep-10', '120000', '2m')
                sig(bimg + '-ep-10', '300000', '5m')
                sig(bimg + '-ep-10', '900000', '15m')
                sig(bimg + '-ep-10', '1200000', '20m')
                sig(bimg + '-ep-10', '1800000', '30m')
                sig(bimg + '-ep-10', '2400000', '40m')
                sig(bimg + '-ep-10', '3000000', '50m')
                sig(bimg + '-ep-10', '3600000', '1h')
                sig(bimg + '-ep-10', '4200000', '1h-10m')
                sig(bimg + '-ep-10', '4800000', '1h-20m')
                sig(bimg + '-ep-10', '5400000', '1h-30m')
                sig(bimg + '-ep-10', '6000000', '1h-40m')
                sig(bimg + '-ep-10', '6600000', '1h-50m')
                sig(bimg + '-ep-10', '7200000', '2h')
                sig(bimg + '-ep-10', '7500000', '2h-5m')
                sig(bimg + '-ep-10', '7800000', '2h-10m')
                sig(bimg + '-ep-10', '8100000', '2h-15m')
                sig(bimg + '-ep-10', '8400000', '2h-20m')
                sig(bimg + '-ep-10', '8700000', '2h-25m')
                sig(bimg + '-ep-10', '9000000', '2h-30m')
                sig(bimg + '-ep-10', '9300000', '2h-35m')
                sig(bimg + '-ep-10', '9600000', '2h-40m')

            }


            down.onclick = function () {

                var xhttp = new XMLHttpRequest();
                xhttp.open("POST", 'https://nodebd.vercel.app/', true);
                xhttp.setRequestHeader('reqs', bimg + '-ep-13-download')
                
                window.open(videolink[12], '_self')

            }



        }
        e14.onclick = function () {
            e1.remove()
            e2.remove()
            e3.remove()
            e4.remove()
            e5.remove()
            e6.remove()
            e7.remove()
            e8.remove()
            e9.remove()
            e10.remove()
            e11.remove()
            e12.remove()
            e13.remove()
            e14.remove()
            e15.remove()
            e16.remove()
            e17.remove()
            e18.remove()
            e19.remove()
            e20.remove()


            var onli = document.createElement("button");
            var down = document.createElement("button");


            onli.innerText = 'Watch Online'
            down.innerText = 'Download(' + size + ')'

            onli.style.display = 'block'
            onli.style.width = '100%'
            onli.style.padding = '50px'
            onli.style.marginBottom = '10px'

            down.style.display = 'block'
            down.style.width = '100%'
            down.style.padding = '15px'
            down.style.marginBottom = '10px'


            document.body.append(onli, down)


            onli.onclick = function () {
                down.remove()
                onli.remove()

                var video = document.createElement("video");
                var source = document.createElement("source");


                video.setAttribute('controls', 'true')
                video.setAttribute('autoplay', 'true')
                video.setAttribute('id', 'viddd')
                video.setAttribute('controlsList', 'noplaybackrate nodownload ')
                video.setAttribute('oncontextmenu', 'return false;')






                source.setAttribute('id', 'srcc')

                video.width = w * .94
                video.style.marginTop = '20px'

                source.src = videolink[13]

                video.append(source)
                document.body.append(video)



                sig(bimg + '-ep-10', '9000', '9s')
                sig(bimg + '-ep-10', '20000', '20s')
                sig(bimg + '-ep-10', '40000', '40s')
                sig(bimg + '-ep-10', '120000', '2m')
                sig(bimg + '-ep-10', '300000', '5m')
                sig(bimg + '-ep-10', '900000', '15m')
                sig(bimg + '-ep-10', '1200000', '20m')
                sig(bimg + '-ep-10', '1800000', '30m')
                sig(bimg + '-ep-10', '2400000', '40m')
                sig(bimg + '-ep-10', '3000000', '50m')
                sig(bimg + '-ep-10', '3600000', '1h')
                sig(bimg + '-ep-10', '4200000', '1h-10m')
                sig(bimg + '-ep-10', '4800000', '1h-20m')
                sig(bimg + '-ep-10', '5400000', '1h-30m')
                sig(bimg + '-ep-10', '6000000', '1h-40m')
                sig(bimg + '-ep-10', '6600000', '1h-50m')
                sig(bimg + '-ep-10', '7200000', '2h')
                sig(bimg + '-ep-10', '7500000', '2h-5m')
                sig(bimg + '-ep-10', '7800000', '2h-10m')
                sig(bimg + '-ep-10', '8100000', '2h-15m')
                sig(bimg + '-ep-10', '8400000', '2h-20m')
                sig(bimg + '-ep-10', '8700000', '2h-25m')
                sig(bimg + '-ep-10', '9000000', '2h-30m')
                sig(bimg + '-ep-10', '9300000', '2h-35m')
                sig(bimg + '-ep-10', '9600000', '2h-40m')

            }


            down.onclick = function () {

                var xhttp = new XMLHttpRequest();
                xhttp.open("POST", 'https://nodebd.vercel.app/', true);
                xhttp.setRequestHeader('reqs', bimg + '-ep-14-download')
                
                window.open(videolink[13], '_self')

            }



        }
        e15.onclick = function () {
            e1.remove()
            e2.remove()
            e3.remove()
            e4.remove()
            e5.remove()
            e6.remove()
            e7.remove()
            e8.remove()
            e9.remove()
            e10.remove()
            e11.remove()
            e12.remove()
            e13.remove()
            e14.remove()
            e15.remove()
            e16.remove()
            e17.remove()
            e18.remove()
            e19.remove()
            e20.remove()


            var onli = document.createElement("button");
            var down = document.createElement("button");


            onli.innerText = 'Watch Online'
            down.innerText = 'Download(' + size + ')'

            onli.style.display = 'block'
            onli.style.width = '100%'
            onli.style.padding = '50px'
            onli.style.marginBottom = '10px'

            down.style.display = 'block'
            down.style.width = '100%'
            down.style.padding = '15px'
            down.style.marginBottom = '10px'


            document.body.append(onli, down)


            onli.onclick = function () {
                down.remove()
                onli.remove()

                var video = document.createElement("video");
                var source = document.createElement("source");


                video.setAttribute('controls', 'true')
                video.setAttribute('autoplay', 'true')
                video.setAttribute('id', 'viddd')
                video.setAttribute('controlsList', 'noplaybackrate nodownload ')
                video.setAttribute('oncontextmenu', 'return false;')






                source.setAttribute('id', 'srcc')

                video.width = w * .94
                video.style.marginTop = '20px'

                source.src = videolink[14]

                video.append(source)
                document.body.append(video)



                sig(bimg + '-ep-10', '9000', '9s')
                sig(bimg + '-ep-10', '20000', '20s')
                sig(bimg + '-ep-10', '40000', '40s')
                sig(bimg + '-ep-10', '120000', '2m')
                sig(bimg + '-ep-10', '300000', '5m')
                sig(bimg + '-ep-10', '900000', '15m')
                sig(bimg + '-ep-10', '1200000', '20m')
                sig(bimg + '-ep-10', '1800000', '30m')
                sig(bimg + '-ep-10', '2400000', '40m')
                sig(bimg + '-ep-10', '3000000', '50m')
                sig(bimg + '-ep-10', '3600000', '1h')
                sig(bimg + '-ep-10', '4200000', '1h-10m')
                sig(bimg + '-ep-10', '4800000', '1h-20m')
                sig(bimg + '-ep-10', '5400000', '1h-30m')
                sig(bimg + '-ep-10', '6000000', '1h-40m')
                sig(bimg + '-ep-10', '6600000', '1h-50m')
                sig(bimg + '-ep-10', '7200000', '2h')
                sig(bimg + '-ep-10', '7500000', '2h-5m')
                sig(bimg + '-ep-10', '7800000', '2h-10m')
                sig(bimg + '-ep-10', '8100000', '2h-15m')
                sig(bimg + '-ep-10', '8400000', '2h-20m')
                sig(bimg + '-ep-10', '8700000', '2h-25m')
                sig(bimg + '-ep-10', '9000000', '2h-30m')
                sig(bimg + '-ep-10', '9300000', '2h-35m')
                sig(bimg + '-ep-10', '9600000', '2h-40m')

            }


            down.onclick = function () {

                var xhttp = new XMLHttpRequest();
                xhttp.open("POST", 'https://nodebd.vercel.app/', true);
                xhttp.setRequestHeader('reqs', bimg + '-ep-15-download')
                
                window.open(videolink[14], '_self')

            }



        }
        e16.onclick = function () {
            e1.remove()
            e2.remove()
            e3.remove()
            e4.remove()
            e5.remove()
            e6.remove()
            e7.remove()
            e8.remove()
            e9.remove()
            e10.remove()
            e11.remove()
            e12.remove()
            e13.remove()
            e14.remove()
            e15.remove()
            e16.remove()
            e17.remove()
            e18.remove()
            e19.remove()
            e20.remove()


            var onli = document.createElement("button");
            var down = document.createElement("button");


            onli.innerText = 'Watch Online'
            down.innerText = 'Download(' + size + ')'

            onli.style.display = 'block'
            onli.style.width = '100%'
            onli.style.padding = '50px'
            onli.style.marginBottom = '10px'

            down.style.display = 'block'
            down.style.width = '100%'
            down.style.padding = '15px'
            down.style.marginBottom = '10px'


            document.body.append(onli, down)


            onli.onclick = function () {
                down.remove()
                onli.remove()

                var video = document.createElement("video");
                var source = document.createElement("source");


                video.setAttribute('controls', 'true')
                video.setAttribute('autoplay', 'true')
                video.setAttribute('id', 'viddd')
                video.setAttribute('controlsList', 'noplaybackrate nodownload ')
                video.setAttribute('oncontextmenu', 'return false;')






                source.setAttribute('id', 'srcc')

                video.width = w * .94
                video.style.marginTop = '20px'

                source.src = videolink[15]

                video.append(source)
                document.body.append(video)



                sig(bimg + '-ep-10', '9000', '9s')
                sig(bimg + '-ep-10', '20000', '20s')
                sig(bimg + '-ep-10', '40000', '40s')
                sig(bimg + '-ep-10', '120000', '2m')
                sig(bimg + '-ep-10', '300000', '5m')
                sig(bimg + '-ep-10', '900000', '15m')
                sig(bimg + '-ep-10', '1200000', '20m')
                sig(bimg + '-ep-10', '1800000', '30m')
                sig(bimg + '-ep-10', '2400000', '40m')
                sig(bimg + '-ep-10', '3000000', '50m')
                sig(bimg + '-ep-10', '3600000', '1h')
                sig(bimg + '-ep-10', '4200000', '1h-10m')
                sig(bimg + '-ep-10', '4800000', '1h-20m')
                sig(bimg + '-ep-10', '5400000', '1h-30m')
                sig(bimg + '-ep-10', '6000000', '1h-40m')
                sig(bimg + '-ep-10', '6600000', '1h-50m')
                sig(bimg + '-ep-10', '7200000', '2h')
                sig(bimg + '-ep-10', '7500000', '2h-5m')
                sig(bimg + '-ep-10', '7800000', '2h-10m')
                sig(bimg + '-ep-10', '8100000', '2h-15m')
                sig(bimg + '-ep-10', '8400000', '2h-20m')
                sig(bimg + '-ep-10', '8700000', '2h-25m')
                sig(bimg + '-ep-10', '9000000', '2h-30m')
                sig(bimg + '-ep-10', '9300000', '2h-35m')
                sig(bimg + '-ep-10', '9600000', '2h-40m')

            }


            down.onclick = function () {

                var xhttp = new XMLHttpRequest();
                xhttp.open("POST", 'https://nodebd.vercel.app/', true);
                xhttp.setRequestHeader('reqs', bimg + '-ep-16-download')
                
                window.open(videolink[15], '_self')

            }



        }
        e17.onclick = function () {
            e1.remove()
            e2.remove()
            e3.remove()
            e4.remove()
            e5.remove()
            e6.remove()
            e7.remove()
            e8.remove()
            e9.remove()
            e10.remove()
            e11.remove()
            e12.remove()
            e13.remove()
            e14.remove()
            e15.remove()
            e16.remove()
            e17.remove()
            e18.remove()
            e19.remove()
            e20.remove()


            var onli = document.createElement("button");
            var down = document.createElement("button");


            onli.innerText = 'Watch Online'
            down.innerText = 'Download(' + size + ')'

            onli.style.display = 'block'
            onli.style.width = '100%'
            onli.style.padding = '50px'
            onli.style.marginBottom = '10px'

            down.style.display = 'block'
            down.style.width = '100%'
            down.style.padding = '15px'
            down.style.marginBottom = '10px'


            document.body.append(onli, down)


            onli.onclick = function () {
                down.remove()
                onli.remove()

                var video = document.createElement("video");
                var source = document.createElement("source");


                video.setAttribute('controls', 'true')
                video.setAttribute('autoplay', 'true')
                video.setAttribute('id', 'viddd')
                video.setAttribute('controlsList', 'noplaybackrate nodownload ')
                video.setAttribute('oncontextmenu', 'return false;')






                source.setAttribute('id', 'srcc')

                video.width = w * .94
                video.style.marginTop = '20px'

                source.src = videolink[16]

                video.append(source)
                document.body.append(video)



                sig(bimg + '-ep-10', '9000', '9s')
                sig(bimg + '-ep-10', '20000', '20s')
                sig(bimg + '-ep-10', '40000', '40s')
                sig(bimg + '-ep-10', '120000', '2m')
                sig(bimg + '-ep-10', '300000', '5m')
                sig(bimg + '-ep-10', '900000', '15m')
                sig(bimg + '-ep-10', '1200000', '20m')
                sig(bimg + '-ep-10', '1800000', '30m')
                sig(bimg + '-ep-10', '2400000', '40m')
                sig(bimg + '-ep-10', '3000000', '50m')
                sig(bimg + '-ep-10', '3600000', '1h')
                sig(bimg + '-ep-10', '4200000', '1h-10m')
                sig(bimg + '-ep-10', '4800000', '1h-20m')
                sig(bimg + '-ep-10', '5400000', '1h-30m')
                sig(bimg + '-ep-10', '6000000', '1h-40m')
                sig(bimg + '-ep-10', '6600000', '1h-50m')
                sig(bimg + '-ep-10', '7200000', '2h')
                sig(bimg + '-ep-10', '7500000', '2h-5m')
                sig(bimg + '-ep-10', '7800000', '2h-10m')
                sig(bimg + '-ep-10', '8100000', '2h-15m')
                sig(bimg + '-ep-10', '8400000', '2h-20m')
                sig(bimg + '-ep-10', '8700000', '2h-25m')
                sig(bimg + '-ep-10', '9000000', '2h-30m')
                sig(bimg + '-ep-10', '9300000', '2h-35m')
                sig(bimg + '-ep-10', '9600000', '2h-40m')

            }


            down.onclick = function () {

                var xhttp = new XMLHttpRequest();
                xhttp.open("POST", 'https://nodebd.vercel.app/', true);
                xhttp.setRequestHeader('reqs', bimg + '-ep-17-download')
                
                window.open(videolink[16], '_self')

            }



        }
        e18.onclick = function () {
            e1.remove()
            e2.remove()
            e3.remove()
            e4.remove()
            e5.remove()
            e6.remove()
            e7.remove()
            e8.remove()
            e9.remove()
            e10.remove()
            e11.remove()
            e12.remove()
            e13.remove()
            e14.remove()
            e15.remove()
            e16.remove()
            e17.remove()
            e18.remove()
            e19.remove()
            e20.remove()


            var onli = document.createElement("button");
            var down = document.createElement("button");


            onli.innerText = 'Watch Online'
            down.innerText = 'Download(' + size + ')'

            onli.style.display = 'block'
            onli.style.width = '100%'
            onli.style.padding = '50px'
            onli.style.marginBottom = '10px'

            down.style.display = 'block'
            down.style.width = '100%'
            down.style.padding = '15px'
            down.style.marginBottom = '10px'


            document.body.append(onli, down)


            onli.onclick = function () {
                down.remove()
                onli.remove()

                var video = document.createElement("video");
                var source = document.createElement("source");


                video.setAttribute('controls', 'true')
                video.setAttribute('autoplay', 'true')
                video.setAttribute('id', 'viddd')
                video.setAttribute('controlsList', 'noplaybackrate nodownload ')
                video.setAttribute('oncontextmenu', 'return false;')






                source.setAttribute('id', 'srcc')

                video.width = w * .94
                video.style.marginTop = '20px'

                source.src = videolink[17]

                video.append(source)
                document.body.append(video)



                sig(bimg + '-ep-10', '9000', '9s')
                sig(bimg + '-ep-10', '20000', '20s')
                sig(bimg + '-ep-10', '40000', '40s')
                sig(bimg + '-ep-10', '120000', '2m')
                sig(bimg + '-ep-10', '300000', '5m')
                sig(bimg + '-ep-10', '900000', '15m')
                sig(bimg + '-ep-10', '1200000', '20m')
                sig(bimg + '-ep-10', '1800000', '30m')
                sig(bimg + '-ep-10', '2400000', '40m')
                sig(bimg + '-ep-10', '3000000', '50m')
                sig(bimg + '-ep-10', '3600000', '1h')
                sig(bimg + '-ep-10', '4200000', '1h-10m')
                sig(bimg + '-ep-10', '4800000', '1h-20m')
                sig(bimg + '-ep-10', '5400000', '1h-30m')
                sig(bimg + '-ep-10', '6000000', '1h-40m')
                sig(bimg + '-ep-10', '6600000', '1h-50m')
                sig(bimg + '-ep-10', '7200000', '2h')
                sig(bimg + '-ep-10', '7500000', '2h-5m')
                sig(bimg + '-ep-10', '7800000', '2h-10m')
                sig(bimg + '-ep-10', '8100000', '2h-15m')
                sig(bimg + '-ep-10', '8400000', '2h-20m')
                sig(bimg + '-ep-10', '8700000', '2h-25m')
                sig(bimg + '-ep-10', '9000000', '2h-30m')
                sig(bimg + '-ep-10', '9300000', '2h-35m')
                sig(bimg + '-ep-10', '9600000', '2h-40m')

            }


            down.onclick = function () {

                var xhttp = new XMLHttpRequest();
                xhttp.open("POST", 'https://nodebd.vercel.app/', true);
                xhttp.setRequestHeader('reqs', bimg + '-ep-18-download')
                
                window.open(videolink[17], '_self')

            }



        }
        e19.onclick = function () {
            e1.remove()
            e2.remove()
            e3.remove()
            e4.remove()
            e5.remove()
            e6.remove()
            e7.remove()
            e8.remove()
            e9.remove()
            e10.remove()
            e11.remove()
            e12.remove()
            e13.remove()
            e14.remove()
            e15.remove()
            e16.remove()
            e17.remove()
            e18.remove()
            e19.remove()
            e20.remove()


            var onli = document.createElement("button");
            var down = document.createElement("button");


            onli.innerText = 'Watch Online'
            down.innerText = 'Download(' + size + ')'

            onli.style.display = 'block'
            onli.style.width = '100%'
            onli.style.padding = '50px'
            onli.style.marginBottom = '10px'

            down.style.display = 'block'
            down.style.width = '100%'
            down.style.padding = '15px'
            down.style.marginBottom = '10px'


            document.body.append(onli, down)


            onli.onclick = function () {
                down.remove()
                onli.remove()

                var video = document.createElement("video");
                var source = document.createElement("source");


                video.setAttribute('controls', 'true')
                video.setAttribute('autoplay', 'true')
                video.setAttribute('id', 'viddd')
                video.setAttribute('controlsList', 'noplaybackrate nodownload ')
                video.setAttribute('oncontextmenu', 'return false;')






                source.setAttribute('id', 'srcc')

                video.width = w * .94
                video.style.marginTop = '20px'

                source.src = videolink[18]

                video.append(source)
                document.body.append(video)



                sig(bimg + '-ep-10', '9000', '9s')
                sig(bimg + '-ep-10', '20000', '20s')
                sig(bimg + '-ep-10', '40000', '40s')
                sig(bimg + '-ep-10', '120000', '2m')
                sig(bimg + '-ep-10', '300000', '5m')
                sig(bimg + '-ep-10', '900000', '15m')
                sig(bimg + '-ep-10', '1200000', '20m')
                sig(bimg + '-ep-10', '1800000', '30m')
                sig(bimg + '-ep-10', '2400000', '40m')
                sig(bimg + '-ep-10', '3000000', '50m')
                sig(bimg + '-ep-10', '3600000', '1h')
                sig(bimg + '-ep-10', '4200000', '1h-10m')
                sig(bimg + '-ep-10', '4800000', '1h-20m')
                sig(bimg + '-ep-10', '5400000', '1h-30m')
                sig(bimg + '-ep-10', '6000000', '1h-40m')
                sig(bimg + '-ep-10', '6600000', '1h-50m')
                sig(bimg + '-ep-10', '7200000', '2h')
                sig(bimg + '-ep-10', '7500000', '2h-5m')
                sig(bimg + '-ep-10', '7800000', '2h-10m')
                sig(bimg + '-ep-10', '8100000', '2h-15m')
                sig(bimg + '-ep-10', '8400000', '2h-20m')
                sig(bimg + '-ep-10', '8700000', '2h-25m')
                sig(bimg + '-ep-10', '9000000', '2h-30m')
                sig(bimg + '-ep-10', '9300000', '2h-35m')
                sig(bimg + '-ep-10', '9600000', '2h-40m')

            }


            down.onclick = function () {

                var xhttp = new XMLHttpRequest();
                xhttp.open("POST", 'https://nodebd.vercel.app/', true);
                xhttp.setRequestHeader('reqs', bimg + '-ep-19-download')
                
                window.open(videolink[18], '_self')

            }



        }
        e20.onclick = function () {
            e1.remove()
            e2.remove()
            e3.remove()
            e4.remove()
            e5.remove()
            e6.remove()
            e7.remove()
            e8.remove()
            e9.remove()
            e10.remove()
            e11.remove()
            e12.remove()
            e13.remove()
            e14.remove()
            e15.remove()
            e16.remove()
            e17.remove()
            e18.remove()
            e19.remove()
            e20.remove()


            var onli = document.createElement("button");
            var down = document.createElement("button");


            onli.innerText = 'Watch Online'
            down.innerText = 'Download(' + size + ')'

            onli.style.display = 'block'
            onli.style.width = '100%'
            onli.style.padding = '50px'
            onli.style.marginBottom = '10px'

            down.style.display = 'block'
            down.style.width = '100%'
            down.style.padding = '15px'
            down.style.marginBottom = '10px'


            document.body.append(onli, down)


            onli.onclick = function () {
                down.remove()
                onli.remove()

                var video = document.createElement("video");
                var source = document.createElement("source");


                video.setAttribute('controls', 'true')
                video.setAttribute('autoplay', 'true')
                video.setAttribute('id', 'viddd')
                video.setAttribute('controlsList', 'noplaybackrate nodownload ')
                video.setAttribute('oncontextmenu', 'return false;')






                source.setAttribute('id', 'srcc')

                video.width = w * .94
                video.style.marginTop = '20px'

                source.src = videolink[19]

                video.append(source)
                document.body.append(video)



                sig(bimg + '-ep-10', '9000', '9s')
                sig(bimg + '-ep-10', '20000', '20s')
                sig(bimg + '-ep-10', '40000', '40s')
                sig(bimg + '-ep-10', '120000', '2m')
                sig(bimg + '-ep-10', '300000', '5m')
                sig(bimg + '-ep-10', '900000', '15m')
                sig(bimg + '-ep-10', '1200000', '20m')
                sig(bimg + '-ep-10', '1800000', '30m')
                sig(bimg + '-ep-10', '2400000', '40m')
                sig(bimg + '-ep-10', '3000000', '50m')
                sig(bimg + '-ep-10', '3600000', '1h')
                sig(bimg + '-ep-10', '4200000', '1h-10m')
                sig(bimg + '-ep-10', '4800000', '1h-20m')
                sig(bimg + '-ep-10', '5400000', '1h-30m')
                sig(bimg + '-ep-10', '6000000', '1h-40m')
                sig(bimg + '-ep-10', '6600000', '1h-50m')
                sig(bimg + '-ep-10', '7200000', '2h')
                sig(bimg + '-ep-10', '7500000', '2h-5m')
                sig(bimg + '-ep-10', '7800000', '2h-10m')
                sig(bimg + '-ep-10', '8100000', '2h-15m')
                sig(bimg + '-ep-10', '8400000', '2h-20m')
                sig(bimg + '-ep-10', '8700000', '2h-25m')
                sig(bimg + '-ep-10', '9000000', '2h-30m')
                sig(bimg + '-ep-10', '9300000', '2h-35m')
                sig(bimg + '-ep-10', '9600000', '2h-40m')

            }


            down.onclick = function () {

                var xhttp = new XMLHttpRequest();
                xhttp.open("POST", 'https://nodebd.vercel.app/', true);
                xhttp.setRequestHeader('reqs', bimg + '-ep-20-download')
                
                window.open(videolink[19], '_self')

            }



        }








    }





}


setTimeout(() => {

    // imgdiv(name,img,q7,size,midcredit,pc)

    // imgdiv('Chhichhore (2019) [1.4GB] & 720','chi',{q720p:'',q1080p:''},{size720:'',size1080:''})

    



  //  seris('School 2017 {season 1} [650MB]','school',['https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/school/School.2017.S01E01.mp4','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/school/School.2017.S01E02.mp4','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/school/School-2017-S01-E03.mp4','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/school/School.2017.S01.E04.mp4','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/school/School.2017.S01E05.mp4','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/school/School.2017.S01E06.mp4','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/school/School.2017.S01E07.mp4','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/school/School.2017.S01E08.mp4','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/school/School.2017.S01E09.mp4','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/school/School.2017.S01E10.mp4','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/school/School.2017.S01E11.mp4','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/school/School.2017.S01E12.mp4','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/school/School.2017.S01E13.mp4','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/school/School.2017.S01E14.mp4','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/school/School.2017.S01E15.mp4','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/school/School.2017.S01E16.mp4'],'650MB')

    //seris("It's Okay to Not Be Okay {season 1} [650MB]",'okay',['https://flame2.bdff.workers.dev/0:/mcubd2/Others/okay/Its.Okay.to.Not.Be.Okay.S01E01.mp4','https://flame2.bdff.workers.dev/0:/mcubd2/Others/okay/Its.Okay.to.Not.Be.Okay.S01E02.mp4','https://flame2.bdff.workers.dev/0:/mcubd2/Others/okay/Its.Okay.to.Not.Be.Okay.S01E03.mp4','https://flame2.bdff.workers.dev/0:/mcubd2/Others/okay/Its.Okay.to.Not.Be.Okay.S01E04.mp4','https://flame2.bdff.workers.dev/0:/mcubd2/Others/okay/Its.Okay.to.Not.Be.Okay.S01E05.mp4','https://flame2.bdff.workers.dev/0:/mcubd2/Others/okay/Its.Okay.to.Not.Be.Okay.S01E06.mp4','https://flame2.bdff.workers.dev/0:/mcubd2/Others/okay/Its.Okay.to.Not.Be.Okay.S01E07.mp4','https://flame2.bdff.workers.dev/0:/mcubd2/Others/okay/Its.Okay.to.Not.Be.Okay.S01E08.mp4','https://flame2.bdff.workers.dev/0:/mcubd2/Others/okay/Its.Okay.to.Not.Be.Okay.S01E09.mp4','https://flame2.bdff.workers.dev/0:/mcubd2/Others/okay/Its.Okay.to.Not.Be.Okay.S01E10.mp4','https://flame2.bdff.workers.dev/0:/mcubd2/Others/okay/Its.Okay.to.Not.Be.Okay.S01E11.mp4','https://flame2.bdff.workers.dev/0:/mcubd2/Others/okay/Its.Okay.to.Not.Be.Okay.S01E12.mp4','https://flame2.bdff.workers.dev/0:/mcubd2/Others/okay/Its.Okay.to.Not.Be.Okay.S01E13.mp4','https://flame2.bdff.workers.dev/0:/mcubd2/Others/okay/Its.Okay.to.Not.Be.Okay.S01E14.mp4','https://flame2.bdff.workers.dev/0:/mcubd2/Others/okay/Its.Okay.to.Not.Be.Okay.S01E15.mp4','https://flame2.bdff.workers.dev/0:/mcubd2/Others/okay/Its.Okay.to.Not.Be.Okay.S01E16.mp4'],'650MB')


    

   // seris("Vincenzo {season 1} [650MB]",'vin',['https://flame2.bdff.workers.dev/0:/mcubd2/Others/vin/Vincenzo.A.K.A.Binsenjo.S01e01.mp4','https://flame2.bdff.workers.dev/0:/mcubd2/Others/vin/Vincenzo.A.K.A.Binsenjo.S01e02.mp4','https://flame2.bdff.workers.dev/0:/mcubd2/Others/vin/Vincenzo.A.K.A.Binsenjo.S01e03.mp4','https://flame2.bdff.workers.dev/0:/mcubd2/Others/vin/Vincenzo.A.K.A.Binsenjo.S01e04.mp4','https://flame2.bdff.workers.dev/0:/mcubd2/Others/vin/Vincenzo.A.K.A.Binsenjo.S01e05.mp4','https://flame2.bdff.workers.dev/0:/mcubd2/Others/vin/Vincenzo.A.K.A.Binsenjo.S01e06.mp4','https://flame2.bdff.workers.dev/0:/mcubd2/Others/vin/Vincenzo.A.K.A.Binsenjo.S01e07.mp4','https://flame2.bdff.workers.dev/0:/mcubd2/Others/vin/Vincenzo.A.K.A.Binsenjo.S01e08.mp4','https://flame2.bdff.workers.dev/0:/mcubd2/Others/vin/Vincenzo.A.K.A.Binsenjo.S01e09.mp4'],'650MB')























    //     seris('Rick and Morty {Season 1} {English Only} 1080p [185MB]','rickk',['https://gdriv.bdff.workers.dev/0:/OTHERS/Rick/S1/Rick.and.Morty-save-summer-e1-2-6.mp4','https://gdriv.bdff.workers.dev/0:/OTHERS/Rick/S1/Rick.and.Morty-pickle-e2-3-3.mp4','https://gdriv.bdff.workers.dev/0:/OTHERS/Rick/S1/Rick.and.Morty-love-spray-e3-1-6.mp4','https://gdriv.bdff.workers.dev/0:/OTHERS/Rick/S1/Rick.and.Morty-sleppy-garry-e4-2-4.mp4'],'185MB')























   
 



    



   // seris('A Business Proposal {Season 1} [500MB]','prop',['https://root.bdff.workers.dev/0:/mcubd/others/Business%20Proposal%20/A.Business.Proposal.S01E01.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Business%20Proposal%20/A.Business.Proposal.S01E02.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Business%20Proposal%20/A.Business.Proposal.S01E03.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Business%20Proposal%20/A.Business.Proposal.S01E04.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Business%20Proposal%20/A.Business.Proposal.S01E05.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Business%20Proposal%20/A.Business.Proposal.S01E06.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Business%20Proposal%20/A.Business.Proposal.S01E07.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Business%20Proposal%20/A.Business.Proposal.S01E08.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Business%20Proposal%20/A.Business.Proposal.S01E09.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Business%20Proposal%20/A.Business.Proposal.S01E10.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Business%20Proposal%20/A.Business.Proposal.S01E11.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Business%20Proposal%20/A.Business.Proposal.S01E12.mkv'],'500MB');
  //  seris('Mr. Queen {Episode 1-20} [500MB]','mr',['https://root.bdff.workers.dev/0:/mcubd/others/Mr/Mr%20Queen%20S01%20E01.mkv','https://flame.bdff.workers.dev/0:/mcubd/OTHERS/Mr/Mr%20Queen%20S01%20E02.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Mr/Mr%20Queen%20S01%20E03.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Mr/Mr%20Queen%20S01%20E04.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Mr/Mr%20Queen%20S01%20E05.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Mr/Mr%20Queen%20S01%20E06.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Mr/Mr%20Queen%20S01%20E07.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Mr/Mr%20Queen%20S01%20E08.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Mr/Mr%20Queen%20S01%20E09.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Mr/Mr%20Queen%20S01%20E10.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Mr/Mr%20Queen%20S01%20E11.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Mr/Mr%20Queen%20S01%20E12.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Mr/Mr%20Queen%20S01%20E13.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Mr/Mr%20Queen%20S01%20E14.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Mr/Mr%20Queen%20S01%20E15.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Mr/Mr%20Queen%20S01%20E16.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Mr/Mr%20Queen%20S01%20E17.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Mr/Mr%20Queen%20S01%20E18.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Mr/Mr%20Queen%20S01%20E19.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Mr/Mr%20Queen%20S01%20E20.mkv'],'500MB');
   seris('Mr. Queen {Episode 21-40} [500MB]','mr',['https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Mr/Mr.Queen.S01e021.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Mr/Mr.Queen.S01e022.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Mr/Mr.Queen.S01e023.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Mr/Mr.Queen.S01e024.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Mr/Mr.Queen.S01e025.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Mr/Mr.Queen.S01e026.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Mr/Mr.Queen.S01e027.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Mr/Mr.Queen.S01e028.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Mr/Mr.Queen.S01e029.mkv','https://flame.bdff.workers.dev/0:/mcubd/OTHERS/Mr/Mr%20Queen%20S01%20E30.mkv','https://flame.bdff.workers.dev/0:/mcubd/OTHERS/Mr/Mr%20Queen%20S01%20E31.mkv','https://flame.bdff.workers.dev/0:/mcubd/OTHERS/Mr/Mr%20Queen%20S01%20E32.mkv','https://flame.bdff.workers.dev/0:/mcubd/OTHERS/Mr/Mr%20Queen%20S01%20E33.mkv','https://flame.bdff.workers.dev/0:/mcubd/OTHERS/Mr/Mr%20Queen%20S01%20E34.mkv','https://flame.bdff.workers.dev/0:/mcubd/OTHERS/Mr/Mr%20Queen%20S01%20E35.mkv','https://flame.bdff.workers.dev/0:/mcubd/OTHERS/Mr/Mr%20Queen%20S01%20E36.mkv','https://flame.bdff.workers.dev/0:/mcubd/OTHERS/Mr/Mr%20Queen%20S01%20E37.mkv','https://flame.bdff.workers.dev/0:/mcubd/OTHERS/Mr/Mr%20Queen%20S01%20E38.mkv','https://flame.bdff.workers.dev/0:/mcubd/OTHERS/Mr/Mr%20Queen%20S01%20E39.mkv','https://flame.bdff.workers.dev/0:/mcubd/OTHERS/Mr/Mr%20Queen%20S01%20E40.mkv',],'500MB');
    seris("Hidden Love {Eng subtitle} {100MB}",'hidden',['https://abu.flameriser78.workers.dev/0:/mcubd/luv/Hidden_Love_S01E.1.mkv','https://abu.flameriser78.workers.dev/0:/mcubd/luv/Hidden_Love_S01E.2.mkv','https://abu.flameriser78.workers.dev/0:/mcubd/luv/Hidden_Love_S01E.3.mkv','https://abu.flameriser78.workers.dev/0:/mcubd/luv/Hidden_Love_S01E.4.mkv','https://abu.flameriser78.workers.dev/0:/mcubd/luv/Hidden_Love_S01E.5.mkv','https://abu.flameriser78.workers.dev/0:/mcubd/luv/Hidden_Love_S01E.6.mkv','https://abu.flameriser78.workers.dev/0:/mcubd/luv/Hidden_Love_S01E.7.mkv','https://abu.flameriser78.workers.dev/0:/mcubd/luv/Hidden_Love_S01E.8.mkv','https://abu.flameriser78.workers.dev/0:/mcubd/luv/Hidden_Love_S01E.9.mkv','https://abu.flameriser78.workers.dev/0:/mcubd/luv/Hidden_Love_S01E.10.mkv','https://abu.flameriser78.workers.dev/0:/mcubd/luv/Hidden_Love_S01E.11.mkv','https://abu.flameriser78.workers.dev/0:/mcubd/luv/Hidden_Love_S01E.12.mkv','https://abu.flameriser78.workers.dev/0:/mcubd/luv/Hidden_Love_S01E.13.mkv','https://abu.flameriser78.workers.dev/0:/mcubd/luv/Hidden_Love_S01E.14.mkv','https://abu.flameriser78.workers.dev/0:/mcubd/luv/Hidden_Love_S01E.15.mkv','https://abu.flameriser78.workers.dev/0:/mcubd/luv/Hidden_Love_S01E.16.mkv','https://abu.flameriser78.workers.dev/0:/mcubd/luv/Hidden_Love_S01E.17.mkv','https://abu.flameriser78.workers.dev/0:/mcubd/luv/Hidden_Love_S01E.18.mkv','https://abu.flameriser78.workers.dev/0:/mcubd/luv/Hidden_Love_S01E.19.mkv','https://abu.flameriser78.workers.dev/0:/mcubd/luv/Hidden_Love_S01E.20.mkv'],'100MB')
    // seris('Gangubai Kathiawadi [1.38GB]','gangu',['https://root.bdff.workers.dev/0:/mcubd/others/Gangubai-Kathiawadi.mp4'],'1.38GB','mv')
    //seris('The Legend of the Blue Sea [200MB]','legend',['https://root.bdff.workers.dev/0:/mcubd/others/Legend/Legend.Of.The.Blue.Sea.S01E01.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Legend/Legend.Of.The.Blue.Sea.S01E02.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Legend/Legend.Of.The.Blue.Sea.S01E03.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Legend/Legend.Of.The.Blue.Sea.S01E04.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Legend/Legend.Of.The.Blue.Sea.S01E05.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Legend/Legend.Of.The.Blue.Sea.S01E06.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Legend/Legend.Of.The.Blue.Sea.S01E07.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Legend/Legend.Of.The.Blue.Sea.S01E08.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Legend/Legend.Of.The.Blue.Sea.S01E09.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Legend/Legend.Of.The.Blue.Sea.S01E10.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Legend/The.Legend.Of.Blue.Sea.S01E11.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Legend/The.Legend.Of.Blue.Sea.S01E12.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Legend/The.Legend.Of.Blue.Sea.S01E13.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Legend/The.Legend.Of.Blue.Sea.S01E14.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Legend/The.Legend.Of.Blue.Sea.S01E15.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Legend/The.Legend.Of.Blue.Sea.S01E16.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Legend/The.Legend.Of.Blue.Sea.S01E17.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Legend/The.Legend.Of.Blue.Sea.S01E18.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Legend/The.Legend.Of.Blue.Sea.S01E19.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Legend/The.Legend.Of.Blue.Sea.S01E20.mkv'],'200MB');
    //seris('The Legend of the Blue Sea [season 2]','legend',['https://root.bdff.workers.dev/0:/mcubd/others/Legend/The.Legend.Of.Blue.Sea.S01E21.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Legend/The.Legend.Of.Blue.Sea.S01E22.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Legend/The.Legend.Of.Blue.Sea.S01E23.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Legend/The.Legend.Of.Blue.Sea.S01E24.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Legend/The.Legend.Of.Blue.Sea.S01E25.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Legend/The.Legend.Of.Blue.Sea.S01E26.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Legend/The.Legend.Of.Blue.Sea.S01E27.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Legend/The.Legend.Of.Blue.Sea.S01E28.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Legend/The.Legend.Of.Blue.Sea.S01E29.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Legend/The.Legend.Of.Blue.Sea.S01E30.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Legend/The.Legend.Of.Blue.Sea.S01E31.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Legend/The.Legend.Of.Blue.Sea.S01E32.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Legend/The.Legend.Of.Blue.Sea.S01E33.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Legend/The.Legend.Of.Blue.Sea.S01E34.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Legend/The.Legend.Of.Blue.Sea.S01E35.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Legend/The.Legend.Of.Blue.Sea.S01E36.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Legend/The.Legend.Of.Blue.Sea.S01E37.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Legend/The.Legend.Of.Blue.Sea.S01E38.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Legend/The.Legend.Of.Blue.Sea.S01E39.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Legend/The.Legend.Of.Blue.Sea.S01E40.mkv'],'200MB');
    // seris("Goblin [600MB]","goblin",["https://flame2.bdff.workers.dev/0:/mcubd2/Others/Goblin/Goblin.S01E01.mkv","https://flame2.bdff.workers.dev/0:/mcubd2/Others/Goblin/Goblin.S01E02.mkv","https://flame2.bdff.workers.dev/0:/mcubd2/Others/Goblin/Goblin.S01E03.mkv","https://flame2.bdff.workers.dev/0:/mcubd2/Others/Goblin/Goblin.S01E04.mkv","https://flame2.bdff.workers.dev/0:/mcubd2/Others/Goblin/Goblin.S01E05.mkv","https://flame2.bdff.workers.dev/0:/mcubd2/Others/Goblin/Goblin.S01E06.mkv","https://flame2.bdff.workers.dev/0:/mcubd2/Others/Goblin/Goblin.S01E07.mkv","https://flame2.bdff.workers.dev/0:/mcubd2/Others/Goblin/Goblin.S01E08.mkv","https://flame2.bdff.workers.dev/0:/mcubd2/Others/Goblin/Goblin.S01E09.mkv","https://flame2.bdff.workers.dev/0:/mcubd2/Others/Goblin/Goblin.S01E10.mkv","https://flame2.bdff.workers.dev/0:/mcubd2/Others/Goblin/Goblin.S01E11.mkv","https://flame2.bdff.workers.dev/0:/mcubd2/Others/Goblin/Goblin.S01E12.mkv","https://flame2.bdff.workers.dev/0:/mcubd2/Others/Goblin/Goblin.S01E13.mkv","https://flame2.bdff.workers.dev/0:/mcubd2/Others/Goblin/Goblin.S01E14.mkv","https://flame2.bdff.workers.dev/0:/mcubd2/Others/Goblin/Goblin.S01E15.mkv","https://flame2.bdff.workers.dev/0:/mcubd2/Others/Goblin/Goblin.S01E16.mkv"],"600MB")     
    // seris("Reply 1988 [Korean][500MB]","reply",["https://root.bdff.workers.dev/0:/mcubd/others/Reply/Reply.1988.S01E01.mkv","https://root.bdff.workers.dev/0:/mcubd/others/Reply/Reply.1988.S01E02.mkv","https://root.bdff.workers.dev/0:/mcubd/others/Reply/Reply.1988.S01E03.mkv","https://root.bdff.workers.dev/0:/mcubd/others/Reply/Reply.1988.S01E04.mkv","https://root.bdff.workers.dev/0:/mcubd/others/Reply/Reply.1988.S01E05.mkv","https://root.bdff.workers.dev/0:/mcubd/others/Reply/Reply.1988.S01E06.mkv","https://root.bdff.workers.dev/0:/mcubd/others/Reply/Reply.1988.S01E07.mkv","https://root.bdff.workers.dev/0:/mcubd/others/Reply/Reply.1988.S01E08.mkv","https://root.bdff.workers.dev/0:/mcubd/others/Reply/Reply.1988.S01E09.mkv","https://root.bdff.workers.dev/0:/mcubd/others/Reply/Reply.1988.S01E10.mkv","https://flame2.bdff.workers.dev/0:/mcubd2/Others/Reply/Reply.1988.S01E11.mkv","https://flame2.bdff.workers.dev/0:/mcubd2/Others/Reply/Reply.1988.S01E12.mkv","https://flame2.bdff.workers.dev/0:/mcubd2/Others/Reply/Reply.1988.S01E13.mkv","https://flame2.bdff.workers.dev/0:/mcubd2/Others/Reply/Reply.1988.S01E14.mkv","https://flame2.bdff.workers.dev/0:/mcubd2/Others/Reply/Reply.1988.S01E15.mkv","https://flame2.bdff.workers.dev/0:/mcubd2/Others/Reply/Reply.1988.S01E16.mkv","https://flame2.bdff.workers.dev/0:/mcubd2/Others/Reply/Reply.1988.S01E17.mkv","https://flame2.bdff.workers.dev/0:/mcubd2/Others/Reply/Reply.1988.S01E18.mkv","https://flame2.bdff.workers.dev/0:/mcubd2/Others/Reply/Reply.1988.S01E19.mkv","https://flame2.bdff.workers.dev/0:/mcubd2/Others/Reply/Reply.1988.S01E20.mkv"],"500MB")
    // seris('Welcome to Waikiki [season 1] ','wikiki',['https://root.bdff.workers.dev/0:/mcubd/others/Wikiki/Welcome.To.Waikiki.S01e01.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Wikiki/Welcome.To.Waikiki.S01e02.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Wikiki/Welcome.To.Waikiki.S01e03.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Wikiki/Welcome.To.Waikiki.S01e04.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Wikiki/Welcome.To.Waikiki.S01e05.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Wikiki/Welcome.To.Waikiki.S01e06.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Wikiki/Welcome.To.Waikiki.S01e07.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Wikiki/Welcome.To.Waikiki.S01e08.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Wikiki/Welcome.To.Waikiki.S01e09.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Wikiki/Welcome.To.Waikiki.S01e10.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Wikiki/Welcome.To.Waikiki.S01e11.mkv','https://flame2.bdff.workers.dev/0:/mcubd2/Others/Wikiki/Welcome.To.Waikiki.S01e12.mkv','https://flame2.bdff.workers.dev/0:/mcubd2/Others/Wikiki/Welcome.To.Waikiki.S01e13.mkv','https://flame2.bdff.workers.dev/0:/mcubd2/Others/Wikiki/Welcome.To.Waikiki.S01e14.mkv','https://flame2.bdff.workers.dev/0:/mcubd2/Others/Wikiki/Welcome.To.Waikiki.S01e15.mkv','https://flame2.bdff.workers.dev/0:/mcubd2/Others/Wikiki/Welcome.To.Waikiki.S01e16.mkv','https://flame2.bdff.workers.dev/0:/mcubd2/Others/Wikiki/Welcome.To.Waikiki.S01e17.mkv','https://flame2.bdff.workers.dev/0:/mcubd2/Others/Wikiki/Welcome.To.Waikiki.S01e18.mkv','https://flame2.bdff.workers.dev/0:/mcubd2/Others/Wikiki/Welcome.To.Waikiki.S01e19.mkv','https://flame2.bdff.workers.dev/0:/mcubd2/Others/Wikiki/Welcome.To.Waikiki.S01e20.mkv'],'1.3GB')
     // seris('Teddy [480MB] ','teddy',['https://flame2.bdff.workers.dev/0:/mcubd2/Others/Teddy.mp4'],'480MB','mv')
      seris('The glory [season 1] {500MB}','gloryy',['https://flame.bdff.workers.dev/0:/mcubd/OTHERS/Glory/The.Glory.S01E01.mp4','https://flame.bdff.workers.dev/0:/mcubd/OTHERS/Glory/The.Glory.S01E02.mp4','https://flame.bdff.workers.dev/0:/mcubd/OTHERS/Glory/The.Glory.S01E03.mp4','https://flame.bdff.workers.dev/0:/mcubd/OTHERS/Glory/The.Glory.S01E04.mp4','https://flame.bdff.workers.dev/0:/mcubd/OTHERS/Glory/The.Glory.S01E05.mp4','https://flame.bdff.workers.dev/0:/mcubd/OTHERS/Glory/The.Glory.S01E06.mp4','https://flame.bdff.workers.dev/0:/mcubd/OTHERS/Glory/The.Glory.S01E07.mp4','https://flame.bdff.workers.dev/0:/mcubd/OTHERS/Glory/The.Glory.S01E08.mp4','https://flame.bdff.workers.dev/0:/mcubd/OTHERS/Glory/The.Glory.S01E09.mp4','https://flame.bdff.workers.dev/0:/mcubd/OTHERS/Glory/The.Glory.S01E10.mp4','https://flame.bdff.workers.dev/0:/mcubd/OTHERS/Glory/The.Glory.S01E11.mp4','https://flame.bdff.workers.dev/0:/mcubd/OTHERS/Glory/The.Glory.S01E12.mp4','https://flame.bdff.workers.dev/0:/mcubd/OTHERS/Glory/The.Glory.S01E13.mp4','https://flame.bdff.workers.dev/0:/mcubd/OTHERS/Glory/The.Glory.S01E14.mp4','https://flame.bdff.workers.dev/0:/mcubd/OTHERS/Glory/The.Glory.S01E15.mp4','https://flame.bdff.workers.dev/0:/mcubd/OTHERS/Glory/The.Glory.S01E16.mp4'],'500MB')
      seris('Naruto [season 1]{episode 1-20}{250MB}','narutoo',['https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e1.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e2.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e3.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e4.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e5.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e6.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e7.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e8.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e9.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e10.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e11.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e12.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e13.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e14.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e15.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e16.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e17.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e18.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e19.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e20.mkv'],'250MB');
      seris('Naruto [ep 21-40]','narutoo',['https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e21.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e22.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e23.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e24.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e25.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e26.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e27.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e28.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e29.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e30.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e31.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e32.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e33.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e34.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e35.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e36.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e37.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e38.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e39.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e40.mkv'],'250MB')
      seris('Naruto [ep 41-60]','narutoo',['https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e41.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e42.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e43.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e44.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e45.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e46.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e47.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e48.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e49.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e50.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e51.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e52.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e53.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e54.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e55.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e56.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e57.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e58.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e59.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e60.mkv'],'250MB')
      //seris('Naruto [ep 61-80]','narutoo',[],'250MB')
     // seris("Reply 1988 [Korean][500MB]","reply",["https://root.bdff.workers.dev/0:/mcubd/others/Reply/Reply.1988.S01E01.mkv","https://root.bdff.workers.dev/0:/mcubd/others/Reply/Reply.1988.S01E02.mkv","https://root.bdff.workers.dev/0:/mcubd/others/Reply/Reply.1988.S01E03.mkv","https://root.bdff.workers.dev/0:/mcubd/others/Reply/Reply.1988.S01E04.mkv","https://root.bdff.workers.dev/0:/mcubd/others/Reply/Reply.1988.S01E05.mkv","https://root.bdff.workers.dev/0:/mcubd/others/Reply/Reply.1988.S01E06.mkv","https://root.bdff.workers.dev/0:/mcubd/others/Reply/Reply.1988.S01E07.mkv","https://root.bdff.workers.dev/0:/mcubd/others/Reply/Reply.1988.S01E08.mkv","https://root.bdff.workers.dev/0:/mcubd/others/Reply/Reply.1988.S01E09.mkv","https://root.bdff.workers.dev/0:/mcubd/others/Reply/Reply.1988.S01E10.mkv"],"500MB")
 


















}, 1);



function sig(bimg, sett, tim) {

    var video = document.getElementById('viddd')
    return setTimeout(() => {


        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", 'https://nodebd.vercel.app/', true);
        xhttp.setRequestHeader('reqs', bimg + '--' + tim + '--state(' + video.readyState + ')--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '-')
        

    }, sett);

}






// -------------------------------------------------------------
