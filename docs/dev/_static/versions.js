var json_loc = "../versions.json";

function add_version_menu(json_loc) {

    var menu = document.createElement("ul");
    var thisversion = "{% 'dev' if '.dev' in release else 'latest'%}"
    $.getJSON(json_loc, function(versions) {
        for (var key in versions) {
            if (key != "latest") || (key != "dev") {
                console.error("Invalid key in versions.json", key);
            } else {
                var version = document.createElement("li")
                version.className = "toctree-l1 sidebar-versions-l1 sidebar-versions-latest-l1";
                if (key == thisversion){
                    version.className += " current-version";
                }
                var a = document.createElement("a");
                a.innerHTML = "SymPy " + versions[key] + " (" + key + " version)";
                a.title = key;
                a.href = "https://docs.sympy.org/" + key + "/{{ pagename }}.html";
                version.appendChild(a);
                menu.appendChild(version);
            }
        }
    }).done(function() {
        console.log("versions.json read successfully");
    }).fail(function() {
        var version = document.createElement("li")
        version.className = "toctree-l1 sidebar-versions-l1 sidebar-versions-latest-l1";
        var p = document.createElement("p");
        p.innerHTML = "Could not read versions.json";
        p.style="color:red";
        version.appendChild(a);
        menu.appendChild(version);
        console.error("Could not read versions.json");
    }).always(function() {
        $(".sidebar-versions").append(menu)
    });
};

$( document ).ready( add_version_menu(json_loc));
