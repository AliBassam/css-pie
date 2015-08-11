document.pieGeneratorForm.onsubmit = function() {
    var e = this;
    var t = this["pie-id"].value.trim().replace(" ", "");
    var n = this["pie-backcolor"].value.trim().replace(" ", "");
    var r = this["pie-size"].value.trim().replace(" ", "");
    var i = this["pie-numslices"].value.trim().replace(" ", "");
    var s = this["pie-percentages"].value.trim().replace(" ", "");
    var o = this["pie-colors"].value.trim().replace(" ", "");
    var uz = this["pie-size-unit"].value.trim().replace(" ", "");
    s = s.split(",");
    o = o.split(",");
    if(i > 0 && o.length == i && s.length == i && t.length != 0 && n.length != 0 && r.length != 0 && uz.length != 0) {
    	var arraySlices = new Array();
    	for(var ctr=0; ctr<i ; ctr++) {
    		var PieSlice = {
    			size: s[ctr],
    			color: o[ctr]
    		};
    		arraySlices.push(PieSlice);
    	}
        var u = new CSSPie(t,r,uz,n,arraySlices);
        document.getElementById("pie-generator-result").innerHTML = "";
        document.getElementById("pie-generator-result").appendChild(u);
        //document.getElementById("pie-generator-result-code").value = u.outerHTML
    }
    return false
}