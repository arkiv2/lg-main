import Swal from 'sweetalert2'
export default ({ route, store, redirect }) => {
    const user = store.getters['auth/user']
    if (!route.meta[0].allowed.some(o => {
        return user.permissions.find(u =>{
            return u.name == o
        })
    })) {
        Swal.fire('Access denied!', '', 'error')
        redirect({ name : 'home' })
        return false
    }
  }
  