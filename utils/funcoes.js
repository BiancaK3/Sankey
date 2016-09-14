 //$( document ).ready(function() {
function percentage(){
    var defs = svg1.append("defs")
    Array.from(document.getElementsByTagName("path")).forEach(function(el, index){
      var valores = JSON.parse(el.getAttribute("data-cores"));      

      if (valores == null) {
        document.getElementById(el.id).setAttribute("style", "stroke: #A4B6C8;")
      }
      else{
          var total = parseInt(el.getElementsByTagName("title")[0].getAttribute("value"));
          var totalAteAgora = 0;
          var valorAnterior;
          var d = testeLinks[el.id]
          link = defs
                .append("linearGradient")
                .attr("id", "cores" + index)
                .attr("gradientUnits","userSpaceOnUse")
                .attr("transform", "rotate(90)")
                .attr("x1", function(){return d.source.x;})
                .attr("y1", function(){return d.source.y;})
                .attr("x2", function(){return d.target.x;})
                .attr("y2", function(){return d.target.y;});

          for (valor in valores) {
            totalAteAgora += (valores[valor] / total) * 100;

            if (valorAnterior){
              link
                .append("stop")
                .attr("offset", (totalAteAgora - .1) + "%")
                .attr("stop-color", getColor(valorAnterior))
                .attr("stop-opacity","1");
            }
          link
              .append("stop")
              .attr("offset", totalAteAgora + "%")
              .attr("stop-color", getColor(valor))
              .attr("stop-opacity","1");
            valorAnterior = valor;
          }
          document.getElementById(el.id).setAttribute("style", "stroke: url(#cores" +index+");marker-start:url(#marker3193);marker-mid:url(#marker3193);marker-end:url(#marker3193)");
     }
 });
}
//});

function colorLinks(){
    jQuery(".link").each(function(){
        var midias = jQuery(this).data("cores");
        var total = jQuery(this).find("title").value();
        if (midias == (null||undefined)) return;
        console.log(midias);
    });
}

 // jQuery("#limpar").on("mousedown", function(){
 //    nodes.forEach(function(node){
 //        jQuery("g text:contains('" + node.name + "')").parent().attr("transform", function(d) { 
 //      return "translate(" + node.x + "," + node.y + ")"; })
 //        sankey.relayout();
 //    });
 // });

 // monta filtros
 function setFilters() {
    // var passos = {},
    //     resp = "";
    // nodes.forEach(function (node) {
    //     if (passos[parseInt(node.x)]) 
    //         passos[parseInt(node.x)].push(node.name);
    //     else
    //         passos[parseInt(node.x)] = [node.name];
    // });
    // Object.keys(passos).sort(function(a,b) {return +a > +b? 1: -1}).forEach(function (el, i) {
    //     resp += "<div style='margin:3px;height: 100px;'><h3>Passo " + (i + 1) + "</h3><ul id='" + parseInt(el) + "'>"
    //     passos[el].forEach(function (name, i) {
    //         if (name.indexOf("Abandono") < 0)
    //             resp += "<li id='" + name.replace(/\s+/g, '_') + "'>" + name + "</li>";
    //     });

    //     resp += "</ul></div><img src='proximo.png' style='height: 100%;margin-top: 80px;'>";
    // });
    // return resp.slice(0, -62);
 }

 function getColor(name) {
    if (name.indexOf("Aband") >= 0)
        return "#8A3334"
    switch (name) {
    case "Facebook":
        return "#2E4DA7"
        break;
    case "Banner":
        return "#091540"
        break;
    case "Google":
        return "#5CD0DB"
        break;
    case "Warning":
        return "#DBBB3D"
        break;
    case "Outros":
        return "#99A1A6"
        break;
    case "Menu":
        return "#E3DCD4"
        break;
    case "Atalhos":
        return "#CAB27D"
        break;
    default:
        return "#6B6F72"
        break;
    }
 }


 
 