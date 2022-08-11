export function stripHtml(html) {
    let tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  }

  export const workebleObject =(props)=>{
    const taits = [...props.split("</p>")];
    const traits = [];
    for (let index = 0; index < taits.length; index++) {
     traits.push({
         trait: `${taits[index].slice(0, taits[index].indexOf("."))}`,
         text: `${taits[index].slice(taits[index].indexOf(".") + 1)}`,
       },)
     
    }
 return traits; 
}