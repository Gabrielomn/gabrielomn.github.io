let insert = function (projects) {
    let $projects = projects.map(project => {
        let $p = document.createElement('div')
        $p.className = "item project"
        let $h3 = document.createElement('h3')
        $h3.className = "projecttitle"
        $h3.innerText = project['title']
        $p.appendChild($h3)
        let $d = document.createElement('p')
        $d.className = "projectdesc"
        $d.innerText = project['description']
        $p.appendChild($d)
        let $l = document.createElement('ul')
        $l.className = "projecttech"
        let techs = project.tech.map(tech => {
            let $li = document.createElement('li')
                $li.innerText = tech
                return $li
            })
            for (let i in techs){
                $l.appendChild(techs[i])
            }
            $p.appendChild($l)
            let $links = document.createElement('div')
            $links.className = "projectlinks"
            let list = getButton(project.links)
            for(let i in list){
              $links.appendChild(list[i])  
            }
            $p.appendChild($links)
            return $p
        })
        let $projectsDiv = document.querySelector('.box')
        for (let i in $projects){
            $projectsDiv.appendChild($projects[i])
        }
} 
    
let getButton = function(link){
    let s = []
    let cont = 0
    if(link['back']){
        let $e = document.createElement('a')
        let $img = document.createElement('img')
        $img.className="sourcebutton"
        $img.src="./assets/back.svg"
        $e.appendChild($img)
        $e.href=link['back']

        s[cont] = $e
        cont++
    }
    if(link['front']){
        let $e = document.createElement('a')
        let $img = document.createElement('img')
        $img.className="sourcebutton"
        $img.src="./assets/front.svg"
        $e.appendChild($img)
        $e.href=link['front']
        s[cont] = $e
        cont++
    }

    if(link['live']){
        let $e = document.createElement('a')
        let $img = document.createElement('img')
        $img.className="sourcebutton"
        $img.src="./assets/site.svg"
        $e.appendChild($img)
        $e.href=link['live']
        s[cont] = $e
        cont++
    }
    return s
}

let getButtons = function(links){
    return links.map(link => getButton(link))
}

fetch('projects.json').
    then(r => r.json()).
    then(insert)
