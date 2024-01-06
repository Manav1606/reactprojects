function customRender(reactelement,maincontainer)
{
    const doelement=document.createElement(reactelement.type)
    // doelement.innerHTML=reactelement.children
    // doelement.setAttribute('href',reactelement.props.href)
    // doelement.setAttribute('target',reactelement.props.target)
    doelement.innerHTML=reactelement.children
    for( const prop in reactelement.props)
    {
        if(prop=== 'children')
        continue;
        doelement.setAttribute(prop,reactelement.props[prop])
    }
     
    maincontainer.appendChild(doelement)
}
const reactelement={
    type:'a',
    props:{
        href: 'https://www.google.com',
        target: '_blank'
    },
    children: 'you visit google'
}
const maincontainer=document.querySelector('#root')
customRender(reactelement,maincontainer)
