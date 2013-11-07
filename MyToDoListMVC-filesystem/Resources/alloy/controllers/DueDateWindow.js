function Controller() {
    function closeWindow() {
        $.DueDateWindow.close();
    }
    function dataSelezionata(e) {
        parent.dateBtn.title = String.formatDate(e.value, "medium");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "DueDateWindow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.__alloyId4 = Ti.UI.createWindow({
        modal: "true",
        backgroundColor: "white",
        title: "Seleziona scadenza",
        id: "__alloyId4"
    });
    $.__views.__alloyId4 && $.addTopLevelView($.__views.__alloyId4);
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        type: Ti.UI.PICKER_TYPE_DATE,
        top: "30"
    });
    $.__views.__alloyId4.add($.__views.picker);
    dataSelezionata ? $.__views.picker.addEventListener("change", dataSelezionata) : __defers["$.__views.picker!change!dataSelezionata"] = true;
    $.__views.closeWindow = Ti.UI.createButton({
        bottom: "40dp",
        title: "Chiudi",
        id: "closeWindow"
    });
    $.__views.__alloyId4.add($.__views.closeWindow);
    closeWindow ? $.__views.closeWindow.addEventListener("click", closeWindow) : __defers["$.__views.closeWindow!click!closeWindow"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var parent = arguments[0].parent;
    __defers["$.__views.__alloyId2!click!closeWindow"] && $.__views.__alloyId2.addEventListener("click", closeWindow);
    __defers["$.__views.picker!change!dataSelezionata"] && $.__views.picker.addEventListener("change", dataSelezionata);
    __defers["$.__views.picker!change!dataSelezionata"] && $.__views.picker.addEventListener("change", dataSelezionata);
    __defers["$.__views.closeWindow!click!closeWindow"] && $.__views.closeWindow.addEventListener("click", closeWindow);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;