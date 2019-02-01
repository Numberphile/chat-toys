window.onload = init;

function init() {
  // Grab toggle button and set event listener.
  var toggle = document.getElementById("masterToggle");
  toggle.onclick = getToggler();

  function getToggler() {
    var login = false;
    var chatContainers = document.getElementsByClassName("chatContainer");
    var loginContainers = document.getElementsByClassName("loginContainer");
    function toggler() {
      if (login) {

        // Hide all chatContainers, show all loginContainers.
        for (var i=0; i<chatContainers.length; i++) {
          chatContainers[i].setAttribute("class", "chatContainer closed");
        }
        for (var i=0; i<loginContainers.length; i++) {
          loginContainers[i].setAttribute("class", "loginContainer");
        }
      } else {

        // Show all chatContainers, hide all loginContainers
        for (var i=0; i<chatContainers.length; i++) {
          chatContainers[i].setAttribute("class", "chatContainer");
        }
        for (var i=0; i<loginContainers.length; i++) {
          loginContainers[i].setAttribute("class", "loginContainer closed");
        }
      }
      login = !login;
    }
    return toggler;
  }

  function Client(params) {
    this.status = params.status;
    this.loginIPInput = params.loginIPInput;
    this.loginNameInput = params.loginNameInput;
    this.loginColorInput = params.loginColorInput;
    this.server;
    this.name;
    this.color;
    this.loginButton = params.loginButton;
    this.chatDisplay = params.chatDisplay;
    this.chatInput = params.chatInput;
    this.sendButton = params.sendButton;
    this.logoutButton = params.logoutButton;
    this.history = new Array();
    this.historyMax = 6;
    this.status = {
      online: false,
      serverName: "",
      userName: "",
      userColor: "black"
    };
    this.pingSent = 0;
  }

  Client.prototype.login = function() {
      // Login stuff.
      // Send a "packet" to the IP address, analyze the response.
    };
  Client.prototype.logout = function() {
      // Logout stuff.
    };
  Client.prototype.handleServerResponse = function(serverResponse) {
      // Server sends users "successfully connected" messages, pings,
      // user login/ logout events, user messages, and "disconnected" messages.
    };
  Client.prototype.updateStatus = function(status) {
      // Update the status
    };
  Client.prototype.handleMyMessage = function(message) {
      // Send a message to the server. Handle special instructions like "/ping"
    };
  Client.prototype.ping = function(ipAddress) {
      // Ping the server! Users can type "/ping" while connected.
    };
  Client.prototype.init = function() {
      // Create event listeners for buttons, etc.
    };

  var server = {
    ipAddress: "124.0.0.255",
    clients: [],
    maxClients: 5,
    connect: function(client) {
      // Connect a client.
      // Send a connected message.
    },
    disconnect: function(client) {
      // Disconnect a client.
      // Send a disconnected message.
    },
    sendConnected: function(client) {
      // Send "connected" message
      // Broadcast a "____ connected" message.
    },
    sendDisconnected: function(client) {
      // Send a "Disconnected" message.
      // Broadcast a "____ disconnected" message.
    },
    ping: function(client) {
      // Send a response ping.
    },
    handleClientMessage: function(client, message) {
      // Broadcast the client's message to the chatroom.
    }
  };

  // Spawn Clients.
  (function(number) {
    for (var i=0; i<number; i++) {

      // Create the client's parameters.
      var param = {
        status: document.getElementById("status" + i),
        loginIPInput: document.getElementById("loginIP" + i),
        loginNameInput: document.getElementById("loginName" +i),
        loginColorInput: document.getElementById("loginColor" +i),
        loginButton: document.getElementById("loginButton" +i),
        chatDisplay: document.getElementById("chatDisplay" +i),
        chatInput: document.getElementById("chatInput" +i),
        sendButton: document.getElementById("sendButton" +i),
        logoutButton: document.getElementById("logout" +i)
      };

      console.log(param);

      // Create the client.
      console.log("hello?");

      // Initialize the client.
    }
  })(6);


}
