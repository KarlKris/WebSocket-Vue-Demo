<template>
  <div class="websocket">

  </div>
</template>

<script>
  import ProtoRoot from '@/proto/proto.js'
  import ProtoBuf from "protobufjs"
  export default {
    name : 'websocket',
    data() {
      return {
        websock: null,
        loginAuthRes : {"header":{"crcCode":-1410399999,"type":1}}
      }
    },
    created() {
      console.log(ProtoRoot);
      this.initWebSocket();
    },
    destroyed() {
      this.websock.close() //离开路由之后断开websocket连接
    },
    methods: {
      initWebSocket(){ 
        //初始化weosocket
        const ws_uri = "ws://127.0.0.1:11028";
        this.websock = new WebSocket(ws_uri);
        this.websock.onmessage = this.websocketonmessage;
        this.websock.onopen = this.websocketonopen;
        this.websock.onerror = this.websocketonerror;
        this.websock.onclose = this.websocketclose;
      },
      websocketonopen(){ 
        //连接建立之后执行send方法发送数据
        this.websocketsend(JSON.stringify(this.loginAuthRes));
      },
      websocketonerror(){
        //连接建立失败重连
        //this.initWebSocket();
        console.log("websocket断开");
      },
      websocketonmessage(e){ 
        var that = this;
        //数据接收
        that.decode({
          data:e.data,
          success:function(msg) {
            console.log(msg);
          }
        })
      },
      websocketsend(data){
        var that = this;
        //数据发送
        that.encode({
          data:data,
          success:function(buffer) {
            that.websock.send(buffer);
          }
        })
        
      },
      websocketclose(e){  
        //关闭
        console.log('断开连接',e);
      },
      // 发生的消息编码成protobuf
      encode(obj) {
        var data = obj.data;
        console.log("编码protobuf前数据:"+data);
        // 成功的回调
        var success = obj.success;
        const Message = ProtoRoot.Message;
        const Header = ProtoRoot.Header;

        console.log("header:" + data.header)
        var header = Header.create(data.header);

        var msg = Message.create({
          "header":header,
          "body":data.body
        });
        console.log("msg:" + JSON.stringify(msg));
        var writer = Message.encode(msg);
        console.log("writer:" + JSON.stringify(writer));
        var buffer = writer.finish();
        console.log("编码后数据:"+buffer);
        if (typeof success === 'function') {
          success(buffer)
        }
      },
      // 接收到服务器二进制流的消息进行解码
      decode(obj) {
        var data = obj.data;
        // 成功的回调
        var success = obj.success;
        const Message = ProtoRoot.Message;
        var reader = new FileReader();
        reader.readAsArrayBuffer(data);
        reader.onload = function(e) {
          var buf = new Uint8Array(reader.result);
          var message = Message.decode(buf);
          if (typeof success === 'function') {
            success(message)
          }
        }
      }
    },
  }
</script>
<style lang='less'>
 
</style>
