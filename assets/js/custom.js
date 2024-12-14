const tab1 = document.getElementById("btn1");
const tab2 = document.getElementById("btn2");
const tab3 = document.getElementById("btn3");
const tab4 = document.getElementById("btn4");
const tab5 = document.getElementById("btn5");
const tab6 = document.getElementById("btn6");
const tab7 = document.getElementById("btn7");
const tab8 = document.getElementById("btn8");
const tab9 = document.getElementById("btn9");
const tab10 = document.getElementById("btn10");
const tab11 = document.getElementById("btn11");
const tab12 = document.getElementById("btn12");
const tab13 = document.getElementById("btn13");
const tab14 = document.getElementById("btn14");
const tab15 = document.getElementById("btn15");
const tab16 = document.getElementById("btn16");
const content1 = tab1.addEventListener("click", () => {
    switchTab(tab1);
});
tab2.addEventListener("click", () => {
    switchTab(tab2);
});
tab3.addEventListener("click", () => {
    switchTab(tab3);
});
tab4.addEventListener("click", () => {
    switchTab(tab4);
});
tab5.addEventListener("click", () => {
    switchTab(tab5);
});
tab6.addEventListener("click", () => {
    switchTab(tab6);
});
tab7.addEventListener("click", () => {
    switchTab(tab7);
});
tab8.addEventListener("click", () => {
    switchTab(tab8);
});
tab9.addEventListener("click", () => {
    switchTab(tab9);
});
tab10.addEventListener("click", () => {
    switchTab(tab10);
});
tab11.addEventListener("click", () => {
    switchTab(tab11);
});
tab12.addEventListener("click", () => {
    switchTab(tab12);
});
tab13.addEventListener("click", () => {
    switchTab(tab13);
});
tab14.addEventListener("click", () => {
    switchTab(tab14);
});
tab15.addEventListener("click", () => {
    switchTab(tab15);
});
tab16.addEventListener("click", () => {
    switchTab(tab16);
});

function switchTab(tabs) {
    if (tabs === tab1) {
        document.getElementById("content-1").innerHTML = "$5.00/mo";
        document.getElementById("content-title-1").innerHTML = "Ocelot Pariah";
        document.getElementById("recommended-gb-1").innerHTML = "20 PLAYERS RECOMMENDED";
        document.getElementById("content-desc-1").innerHTML = "<span>3.5GB RAM<br><span class='clr-light-blue'>DDR4</span></span><span>25GB NVMe<br><span class='clr-light-blue'>STORAGE</span></span>";
        document.getElementById("btn-get-started-1").setAttribute("onclick", "window.location.href='https://gravelhost.com/index.php?rp=/store/fivem/fivem-package-1';");
        tab2.classList.add("btn-official");
        tab1.classList.remove("btn-official");
    }
    if (tabs === tab2) {
        document.getElementById("content-1").innerHTML = "$8.89/mo";
        document.getElementById("content-title-1").innerHTML = "Ocelot Pariah+";
        document.getElementById("recommended-gb-1").innerHTML = "40 PLAYERS RECOMMENDED";
        document.getElementById("content-desc-1").innerHTML = "<span>3.5GB RAM<br><span class='clr-light-blue'>DDR5</span></span><span>50GB NVMe<br><span class='clr-light-blue'>STORAGE</span></span>";
        document.getElementById("btn-get-started-1").setAttribute("onclick", "window.location.href='https://gravelhost.com/index.php?rp=/store/fivem/fivem-premium-ocelot';");
        tab1.classList.add("btn-official");
        tab1.classList.remove("btn-login-common");
        tab2.classList.remove("btn-official");
    }
    if (tabs === tab3) {
        document.getElementById("content-2").innerHTML = "$7.00/mo";
        document.getElementById("content-title-2").innerHTML = "Zentorno";
        document.getElementById("recommended-gb-2").innerHTML = "40 PLAYERS RECOMMENDED";
        document.getElementById("content-desc-2").innerHTML = "<span>7GB RAM<br><span class='clr-light-blue'>DDR4</span></span><span>50GB NVMe<br><span class='clr-light-blue'>STORAGE</span></span>";
        document.getElementById("btn-get-started-2").setAttribute("onclick", "window.location.href='https://gravelhost.com/index.php?rp=/store/fivem/fivem-package-2';");
        tab4.classList.add("btn-official");
        tab3.classList.remove("btn-official");
    }
    if (tabs === tab4) {
        document.getElementById("content-2").innerHTML = "$10.89/mo";
        document.getElementById("content-title-2").innerHTML = "Zentorno+";
        document.getElementById("recommended-gb-2").innerHTML = "60 PLAYERS RECOMMENDED";
        document.getElementById("content-desc-2").innerHTML = "<span>7GB RAM<br><span class='clr-light-blue'>DDR5</span></span><span>100GB NVMe<br><span class='clr-light-blue'>STORAGE</span></span>";
        document.getElementById("btn-get-started-2").setAttribute("onclick", "window.location.href='https://gravelhost.com/index.php?rp=/store/fivem/fivem-premium-zentorno';");
        tab3.classList.add("btn-official");
        tab3.classList.remove("btn-login-common");
        tab4.classList.remove("btn-official");
    }
    if (tabs === tab5) {
        document.getElementById("content-3").innerHTML = "$16.00/mo";
        document.getElementById("content-title-3").innerHTML = "P-996 LAZER";
        document.getElementById("recommended-gb-3").innerHTML = "100 PLAYERS RECOMMENDED";
        document.getElementById("content-desc-3").innerHTML = "<span>9GB RAM<br><span class='clr-light-blue'>DDR4</span></span><span>75GB NVMe<br><span class='clr-light-blue'>STORAGE</span></span>";
        document.getElementById("btn-get-started-3").setAttribute("onclick", "window.location.href='https://gravelhost.com/index.php?rp=/store/fivem/fivem-package-2';");
        tab6.classList.add("btn-official");
        tab5.classList.remove("btn-official");
    }
    if (tabs === tab6) {
        document.getElementById("content-3").innerHTML = "$19.89/mo";
        document.getElementById("content-title-3").innerHTML = "P-996 LAZER+";
        document.getElementById("recommended-gb-3").innerHTML = "150 PLAYERS RECOMMENDED";
        document.getElementById("content-desc-3").innerHTML = "<span>9GB RAM<br><span class='clr-light-blue'>DDR5</span></span><span>100GB NVMe<br><span class='clr-light-blue'>STORAGE</span></span>";
        document.getElementById("btn-get-started-3").setAttribute("onclick", "window.location.href='https://gravelhost.com/index.php?rp=/store/fivem/fivem-premium-p-996-lazer';");
        tab5.classList.add("btn-official");
        tab5.classList.remove("btn-login-common");
        tab6.classList.remove("btn-official");
    }
    if (tabs === tab7) {
        document.getElementById("content-4").innerHTML = "$23.00/mo";
        document.getElementById("content-title-4").innerHTML = "Oppressor Mk II";
        document.getElementById("recommended-gb-4").innerHTML = "200 PLAYERS RECOMMENDED";
        document.getElementById("content-desc-4").innerHTML = "<span>13GB RAM<br><span class='clr-light-blue'>DDR4</span></span><span>100GB NVMe<br><span class='clr-light-blue'>STORAGE</span></span>";
        document.getElementById("btn-get-started-4").setAttribute("onclick", "window.location.href='https://gravelhost.com/index.php?rp=/store/fivem/fivem-package-4';");
        tab8.classList.add("btn-official");
        tab7.classList.remove("btn-official");
    }
    if (tabs === tab8) {
        document.getElementById("content-4").innerHTML = "$26.89/mo";
        document.getElementById("content-title-4").innerHTML = "Oppressor Mk II+";
        document.getElementById("recommended-gb-4").innerHTML = "200+ PLAYERS RECOMMENDED";
        document.getElementById("content-desc-4").innerHTML = "<span>13GB RAM<br><span class='clr-light-blue'>DDR5</span></span><span>150GB NVMe<br><span class='clr-light-blue'>STORAGE</span></span>";
        document.getElementById("btn-get-started-4").setAttribute("onclick", "window.location.href='https://gravelhost.com/index.php?rp=/store/fivem/fivem-premium-opressor-mk-ii';");
        tab7.classList.add("btn-official");
        tab7.classList.remove("btn-login-common");
        tab8.classList.remove("btn-official");
    }
    if (tabs === tab9) {
        document.getElementById("content-4").innerHTML = "$9.00/mo";
        document.getElementById("content-title-4").innerHTML = "EOKA";
        document.getElementById("recommended-gb-4").innerHTML = "40 PLAYERS RECOMMENDED";
        document.getElementById("content-desc-4").innerHTML = "<span>6GB RAM<br><span class='clr-light-blue'>DDR4</span></span><span>25GB NVMe<br><span class='clr-light-blue'>STORAGE</span></span>";
        document.getElementById("btn-get-started-4").setAttribute("onclick", "window.location.href='https://gravelhost.com/index.php?rp=/store/rust-servers/rust-hosting-eoka-plan';");
        tab10.classList.add("btn-official");
        tab9.classList.remove("btn-official");
    }
    if (tabs === tab10) {
        document.getElementById("content-4").innerHTML = "$13.89/mo";
        document.getElementById("content-title-4").innerHTML = "EOKA+";
        document.getElementById("recommended-gb-4").innerHTML = "50+ PLAYERS RECOMMENDED";
        document.getElementById("content-desc-4").innerHTML = "<span>6GB RAM<br><span class='clr-light-blue'>DDR5</span></span><span>50GB NVMe<br><span class='clr-light-blue'>STORAGE</span></span>";
        document.getElementById("btn-get-started-4").setAttribute("onclick", "window.location.href='https://gravelhost.com/index.php?rp=/store/rust-servers/rust-hosting-eoka';");
        tab9.classList.add("btn-official");
        tab9.classList.remove("btn-login-common");
        tab10.classList.remove("btn-official");
    }
    if (tabs === tab11) {
        document.getElementById("content-4").innerHTML = "$14.00/mo";
        document.getElementById("content-title-4").innerHTML = "CROSSBOW";
        document.getElementById("recommended-gb-4").innerHTML = "80 PLAYERS RECOMMENDED";
        document.getElementById("content-desc-4").innerHTML = "<span>7.5GB RAM<br><span class='clr-light-blue'>DDR4</span></span><span>50GB NVMe<br><span class='clr-light-blue'>STORAGE</span></span>";
        document.getElementById("btn-get-started-4").setAttribute("onclick", "window.location.href='https://gravelhost.com/index.php?rp=/store/rust-servers/rust-hosting-crossbow-plan';");
        tab12.classList.add("btn-official");
        tab11.classList.remove("btn-official");
    }
    if (tabs === tab12) {
        document.getElementById("content-4").innerHTML = "$18.89/mo";
        document.getElementById("content-title-4").innerHTML = "CROSSBOW+";
        document.getElementById("recommended-gb-4").innerHTML = "100+ PLAYERS RECOMMENDED";
        document.getElementById("content-desc-4").innerHTML = "<span>7.5GB RAM<br><span class='clr-light-blue'>DDR5</span></span><span>75GB NVMe<br><span class='clr-light-blue'>STORAGE</span></span>";
        document.getElementById("btn-get-started-4").setAttribute("onclick", "window.location.href='https://gravelhost.com/index.php?rp=/store/rust-servers/rust-hosting-crossbow';");
        tab11.classList.add("btn-official");
        tab11.classList.remove("btn-login-common");
        tab12.classList.remove("btn-official");
    }
    if (tabs === tab13) {
        document.getElementById("content-4").innerHTML = "$21.00/mo";
        document.getElementById("content-title-4").innerHTML = "ASSAULT RIFLE";
        document.getElementById("recommended-gb-4").innerHTML = "100 PLAYERS RECOMMENDED";
        document.getElementById("content-desc-4").innerHTML = "<span>9GB RAM<br><span class='clr-light-blue'>DDR4</span></span><span>75GB NVMe<br><span class='clr-light-blue'>STORAGE</span></span>";
        document.getElementById("btn-get-started-4").setAttribute("onclick", "window.location.href='https://gravelhost.com/index.php?rp=/store/rust-servers/rust-hosting-python-plan';");
        tab14.classList.add("btn-official");
        tab13.classList.remove("btn-official");
    }
    if (tabs === tab14) {
        document.getElementById("content-4").innerHTML = "$25.89/mo";
        document.getElementById("content-title-4").innerHTML = "ASSAULT RIFLE+";
        document.getElementById("recommended-gb-4").innerHTML = "150+ PLAYERS RECOMMENDED";
        document.getElementById("content-desc-4").innerHTML = "<span>9GB RAM<br><span class='clr-light-blue'>DDR5</span></span><span>100GB NVMe<br><span class='clr-light-blue'>STORAGE</span></span>";
        document.getElementById("btn-get-started-4").setAttribute("onclick", "window.location.href='https://gravelhost.com/index.php?rp=/store/rust-servers/rust-hosting-assault-rifle';");
        tab13.classList.add("btn-official");
        tab13.classList.remove("btn-login-common");
        tab14.classList.remove("btn-official");
    }
    if (tabs === tab15) {
        document.getElementById("content-4").innerHTML = "$31.00/mo";
        document.getElementById("content-title-4").innerHTML = "L96 RIFLE";
        document.getElementById("recommended-gb-4").innerHTML = "200 PLAYERS RECOMMENDED";
        document.getElementById("content-desc-4").innerHTML = "<span>13GB RAM<br><span class='clr-light-blue'>DDR4</span></span><span>100GB NVMe<br><span class='clr-light-blue'>STORAGE</span></span>";
        document.getElementById("btn-get-started-4").setAttribute("onclick", "window.location.href='https://gravelhost.com/index.php?rp=/store/rust-servers/rust-hosting-rifle-plan';");
        tab16.classList.add("btn-official");
        tab15.classList.remove("btn-official");
    }
    if (tabs === tab16) {
        document.getElementById("content-4").innerHTML = "$34.89/mo";
        document.getElementById("content-title-4").innerHTML = "L96 RIFLE+";
        document.getElementById("recommended-gb-4").innerHTML = "200+ PLAYERS RECOMMENDED";
        document.getElementById("content-desc-4").innerHTML = "<span>13GB RAM<br><span class='clr-light-blue'>DDR5</span></span><span>150GB NVMe<br><span class='clr-light-blue'>STORAGE</span></span>";
        document.getElementById("btn-get-started-4").setAttribute("onclick", "window.location.href='https://gravelhost.com/index.php?rp=/store/rust-servers/rust-hosting-l96-rifle';");
        tab15.classList.add("btn-official");
        tab15.classList.remove("btn-login-common");
        tab16.classList.remove("btn-official");
    }
}