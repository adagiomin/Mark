tions.forEach(function(opt) {
    if (!opt) return;
    var splitOpt = opt.split('='),
      name = splitOpt[0],
      value = splitOpt[1];

    // Options implementations
    switch (name) {
      case 'slaveOk':
      case 'slave_ok':
        serverOptions.slave_ok = value === 'true';
        dbOptions.slaveOk = value === 'true';
        break;
      case 'maxPoolSize':
      case 'poolSize':
        serverOptions.poolSize = parseInt(value, 10);
        replSetServersOptions.poolSize = parseInt(value, 10);
        break;
      case 'appname':
        object.appname = decodeURIComponent(value);
        break;
      case 'autoReconnect':
      case 'auto_reconnect':
        serverOptions.auto_reconnect = value === 'true';
        break;
      case 'ssl':
        if (value === 'prefer') {
          serverOptions.ssl = value;
          replSetServersOptions.ssl = value;
          mongosOptions.ssl = value;
          break;
        }
        serverOptions.ssl = value === 'true';
        replSetServersOptions.ssl = value === 'true';
        mongosOptions.ssl = value === 'true';
        break;
      case 'sslValidate':
        serverOptions.sslValidate = value === 'true';
        replSetServersOptions.sslValidate = value === 'true';
        mongosOptions.sslValidate = value === 'true';
        break;
      case 'replicaSet':
      case 'rs_name':
        replSetServersOptions.rs_name = value;
        break;
      case 'reconnectWait':
        replSetServersOptions.reconnectWait = parseInt(value, 10);
        break;
      case 'retries':
        replSetServersOptions.retries = parseInt(value, 10);
        break;
      case 'readSecondary':
      case 'read_secondary':
        replSetServersOptions.read_secondary = value === 'true';
        break;
      case 'fsync':
        dbOptions.fsync = value === 'true';
        break;
      case 'journal':
        dbOptions.j = value === 'true';
        break;
      case 'safe':
        dbOptions.safe = value === 'true';
        break;
      case 'nativeParser':
      case 'native_parser':
        dbOptions.native_parser = value === 'true';
        break;
      case 'readConcernLevel':
        dbOptions.readConcern = new ReadConcern(value);
        break;
      case 'connectTimeoutMS':
        serverOptions.socketOptions.connectTimeoutMS = parseInt(value, 10);
        replSetServersOptions.socketOptions.connectTimeoutMS = parseInt(value, 10);
        mongosOptions.socketOptions.connectTimeoutMS = parseInt(value, 10);
        break;
      case 'socketTimeoutMS':
        serverOptions.socketOptions.socketTimeoutMS = parseInt(value, 10);
        replSetServersOptions.socketOptions.socketTimeoutMS = parseInt(value, 10);
        mongosOptions.socketOptions.socketTimeoutMS = parseInt(value, 10);
        break;
      case 'w':
        dbOptions.w = parseInt(value, 10);
        if (isNaN(dbOptions.w)) dbOptions.w = value;
        break;
      case 'authSource':
        dbOptions.authSource = value;
        break;
      case 'gssapiServiceName':
        dbOptions.gssapiServiceName = value;
        break;
      case 'authMechanism':
        if (value === 'GSSAPI') {
          // If no password provided decode only the principal
          if (object.auth == null) {
            let urlDecodeAuthPart = decodeURIComponent(authPart);
            if (urlDecodeAuthPart.indexOf('@') === -1)
              throw new Error('GSSAPI requires a provided principal');
            object.auth = { user: urlDecodeAuthPart, password: null };
          } else {
            object.auth.user = decodeURIComponent(object.auth.user);
          }
        } else if (value === 'MONGODB-X509') {
          object.auth = { user: decodeURIComponent(authPart) };
        }

        // Only support GSSAPI or MONGODB-CR for now
        if (
          value !== 'GSSAPI' &&
          value !== 'MONGODB-X509' &&
          value !== 'MONGODB-CR' &&
          value !== 'DEFAULT' &&
          value !== 'SCRA