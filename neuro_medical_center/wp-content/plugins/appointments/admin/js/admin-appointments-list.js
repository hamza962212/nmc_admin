!function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t){AppointmentsAdmin=window.AppointmentsAdmin||{},function(e,t,n){"use strict";function i(e){function i(){n("#the-list .check-column :checked").length?n("#app-export-selected").show():n("#app-export-selected").hide()}var o={servicesPrice:[]};return this.options=n.extend({},o,e),this.isEditing=!1,this.$exportButton=n(".app-export_trigger"),this.$addNew=n(".add-new-h2"),this.$addNewSpinner=n(".add-new-waiting"),this.$editAppointment=n(".app-inline-edit"),this.$table=n("table.appointments"),n("#delete_removed").click(function(e){return confirm(t.deleteRecordsConfirm)}),this.$addNew.click(function(){this.$addNewSpinner.show(),this.removeActiveEditorForms(),this.showEditorForm(0,function(e){this.$table.prepend(e),this.$addNewSpinner.hide()})}.bind(this)),this.$editAppointment.click(function(e){var t=n(e.target).data("app-id"),i=n("#app-"+t),o=i.find(".waiting");o.show(),this.removeActiveEditorForms(),this.showEditorForm(t,function(e){o.hide(),i.hide(),i.after(e)})}.bind(this)),this.$table.on("click",".cancel",this.removeActiveEditorForms.bind(this)),this.$table.on("change",'select[name="service"]',function(e){var t=n(e.target),i=t.val();this.options.servicesPrice[i]&&t.parents(".inline-edit-col").find('input[name="price"]').val(this.options.servicesPrice[i])}.bind(this)),this.$table.on("click",".save",this.saveEditor.bind(this)),this.$exportButton.click(function(e){var t=n(e.target),i=t.closest("form"),o=n(".column-delete.app-check-column :checked"),r=i.find("#app-export_type");return t.is("#app-export-selected")&&o.length?(o.each(function(){i.append("<input type='hidden' name='app[]' value='"+n(this).val()+"' />")}),r.val("selected"),!0):t.is("#app-export-type")?(i.append("<input type='hidden' name='status' value='"+t.attr("data-type")+"' />"),r.val("type"),!0):!!t.is("#app-export-all")&&(r.val("all"),!0)}),n(".app-change-status-btn").click(function(e){var t=n(this);return n("th.app-check-column input:checkbox:checked").each(function(){t.after('<input type="hidden" name="app[]" value="'+n(this).val()+'"/>')}),!0}),n(".info-button").click(function(){n(".status-description").toggle("fast")}),n(document).on("change",".check-column input, .app-column-cb input",i),n(i),this}i.prototype.removeActiveEditorForms=function(){this.$table.find(".inline-edit-row").hide(),n(".app-tr").show()},i.prototype.showEditorForm=function(e,i){var o={action:"inline_edit",col_len:this.options.columns,app_id:e,nonce:this.options.nonces.addNew,columns:this.options.columns};return n.post(ajaxurl,o,function(e){e&&e.error?alert(e.error):e&&"function"==typeof i?(i.call(this,[e.result]),this.initDatepicker()):alert(t.unexpectedError)}.bind(this),"json")},i.prototype.initDatepicker=function(){n(".datepicker").datepicker({dateFormat:"yy-mm-dd",firstDay:AppointmentsDateSettings.weekStart})},i.prototype.saveEditor=function(e){var i=n(e.target),o=i.parents(".inline-edit-row"),r=o.find(".waiting");r.show();var a=["user","cname","email","phone","address","city","service","worker","price","date","time","note","status"],s={};n.map(a,function(e){"cname"===e?s.name=o.find('[name="'+e+'"]').val():s[e]=o.find('[name="'+e+'"]').val()});var p=i.data("app-id"),c=o.find(".cancel");s.app_id=p,s.resend=o.find('input[name="resend"]').is(":checked")?1:0,s.nonce=this.options.nonces.editApp,s.action="inline_edit_save",n(document).trigger("app-appointment-inline_edit-save_data",[s,o]),n.post(ajaxurl,s,function(e){return r.hide(),e&&e.error?void o.find(".error").html(e.error).show().delay(1e4).fadeOut("slow"):e?(o.find(".error").html(e.message).show().delay(1e4).fadeOut("slow"),p&&parseInt(p,10)||!e||!e.app_id||location.reload(),e.reload&&location.reload(),void(c[0].innerHTML="Close")):void alert(t.unexpectedError)}.bind(this),"json")},e.appointmentsList=function(e){return new i(e)}}(AppointmentsAdmin,Appi18n,jQuery)}]);
//# sourceMappingURL=admin-appointments-list.js.map