

export const saveInRedax = (user, props) => {
    props.saveid(user.id)
    props.saveFirstName(user.firstName)
    props.saveLastName(user.lastName)
    props.saveEmail(user.email)
    props.savePassword(user.password)
    props.savePhoneNumber(user.phoneNumber)
    props.saveBirthDate(user.birthDate)
    props.saveMedicines(user.medicines)
    props.save_id(user._id)
}