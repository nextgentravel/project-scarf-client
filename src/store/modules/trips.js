const trips = {
    firestorePath: 'trips',
    firestoreRefType: 'collection', // or 'doc'
    moduleName: 'trips',
    statePropName: 'data',
    namespaced: true, // automatically added
  
    // this object is your store module (will be added as '/trips')
    // you can also add state/getters/mutations/actions
    state: {},
    getters: {},
    mutations: {},
    actions: {},
  }
  
  export default trips