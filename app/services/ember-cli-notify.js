import Ember from 'ember';
export default Ember.Service.extend({
	// availableIn: ['controllers', 'routes'],
	init:function(){
		this._super();
		//Default Options should be defined
		this.set('messages',[]);
		this.setOptions({});
	},
	messages:[],//TODO: Create an object and properties for message
	options:{},
	setOptions:function(args){
		var defaults = {
			closeAfter:2000,
      autoClose:true,
			successClass:'green',
			infoClass:'blue',
			errorClass:'red',
			warningClass:'yellow',
			defaultClass:'blue',
			loadingClass:'blue',
			animation:true,
      animationType:['fade','slide up','slide down','slide left','slide right'],
      animationIn:'slide up in',
      animationOut:'slide up out',
			style:'bootstrap',
			closeIcon:false,
			successIconClass:'icon-ok_circle',
			errorIconClass:'icon-cancel_circle',
			infoIconClass:'icon-info',
			warningIconClass:'icon-wrongemail',
			defaultIconClass:'icon-wrongemail',
			loadingIconClass:'icon-spinner ico-pulse'
		}
		var options = Ember.merge( args, defaults);
		this.set('options',options);
	},
	success:addInfo('success'),
	info:addInfo('info'),
	error:addInfo('error'),
	warning:addInfo('warning'),
	message:addInfo(),
	trashMessage:[],
	updateMessage:[],
	removeNotification:function(id){
		if(!id){
			throw "Invalid Argument Exception";
			return;
		}
		this.get('trashMessage').addObject({"id":id});
	},
	updateNotification:function(id,message){
		if(!id){
			throw "Invalid Argument Exception";
			return;
		}
		if(!message){
			throw "Invalid Message Exception"
			return;
		}
		this.get('updateMessage').addObject({"id":id,"message":message});
	},
	loading:addInfo('loading'),
	addMessage:function(scope,message,type,options){
		type = type?type:'default';
		var id = new Date().getTime();
		while(1){
			if(this.get('messages').filterBy('id',id).length){
				id = id + 1;
			}else{
				break;
			}
		}
		this.get('messages').addObject({"id":id,"message":message,"type":type,"inQueue":true,"deleted":false,"options":options});
		return id;
	}
});
function addInfo(type) {
  return function(message, options) {
    options = options || {};
    return this.addMessage(this,message,type,options)
  };
}
