function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.tg = Ti.UI.createTabGroup({
        id: "tg"
    });
    $.__views.__alloyId26 = Alloy.createController("NewToDoWindow", {
        id: "__alloyId26"
    });
    $.__views.__alloyId25 = Ti.UI.createTab({
        window: $.__views.__alloyId26.getViewEx({
            recurse: true
        }),
        title: "Nuova ToDo",
        icon: "KS_nav_ui.png",
        id: "__alloyId25"
    });
    $.__views.tg.addTab($.__views.__alloyId25);
    $.__views.__alloyId30 = Alloy.createController("ListToDoWindow", {
        id: "__alloyId30"
    });
    $.__views.__alloyId29 = Ti.UI.createTab({
        window: $.__views.__alloyId30.getViewEx({
            recurse: true
        }),
        title: "Lista ToDo",
        icon: "KS_nav_views.png",
        id: "__alloyId29"
    });
    $.__views.tg.addTab($.__views.__alloyId29);
    $.__views.tg && $.addTopLevelView($.__views.tg);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.tg.open();
    Alloy.Globals.tabgroup = $.tg;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;