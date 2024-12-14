async function toggleCategory(ele) {
    let element = document.getElementById(ele);
    if (element.style.display == "block") {
        element.style.display = "none";
    } else {
        element.style.display = "block";
    }
}

function tooltipon(ele) {
    document.getElementById(`tooltip${ele}`).style.visibility = "visible";
}

function tooltipoff(ele) {
    document.getElementById(`tooltip${ele}`).style.visibility = "hidden";
}

function offset(el) {
    var rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {
        top: rect.top + scrollTop,
        left: rect.left + scrollLeft
    }
}

function serviceHoverOn(ele, incidents, date, avg, rid) {
    // let rect = document.getElementById(ele).getBoundingClientRect();
    var divOffset = offset(document.getElementById(ele));
    // let divOffset = document.getElementById(ele).style;
    // document.getElementById(`servicetip-date`).innerHTML = 'N/A'
    if (date != 'date here' && date) document.getElementById(`serviceTooltip-date`).innerHTML = `${new Date(Number(date)).toLocaleDateString()} <span style="color: #5f5f5f;">${Number(avg) || Number(avg) == 0 ? '— %'+Number(avg).toFixed(2) : ''}</span>`;
    if (!date || date == 'date here') document.getElementById(`serviceTooltip-date`).innerHTML = `Incidents recorded on this day <span style="color: #5f5f5f;">${Number(avg) || Number(avg) == 0 ? '— %'+Number(avg).toFixed(2) : ''}</span>`;
    // incidents
    var incidText = ``;
    if (incidents.length < 1) {
        incidText = `No incidents recorded.`;
    } else {
        incidents.forEach(e => {
            let href = `/history#${e.title}-${e.createdAt}`;
            if (!e.closed) href = `/#openIncidents`
            incidText += `<span style="color:${e.color};"><a href="${href}">${e.title}</a></span><br />`
        });
    }
    var serviceToolTipPersist = false;
    document.getElementById(ele).onclick = function() {
        serviceToolTipPersist = true;
    }

    document.getElementById('serviceTooltip').onmouseleave = function() {
        serviceHoverOff('serviceTooltip');
    }

    document.getElementById(ele).onmouseout = function() {
        if (!serviceToolTipPersist) {
            serviceHoverOff('serviceTooltip');
        }
    };
    document.getElementById(`serviceTooltip-content`).innerHTML = incidText;
    document.getElementById(`serviceTooltip-box`).style.top = `${divOffset.top+18}px`;
    document.getElementById(`serviceTooltip-box`).style.left = `${divOffset.left/2}px`;
    document.getElementById(`serviceTooltip`).style.display = "block";
}

function serviceHoverOff(ele) {
    document.getElementById(ele).style.display = "none";
}