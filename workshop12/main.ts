import { UserDAO } from './UserDAO';

const userDAO = new UserDAO();

userDAO.insert('อัมพร', 'amporn@gmail.com');
userDAO.insert('สุนิสา', 'sunisa@gmail.com');
userDAO.insert('พิชัย', 'pichai@gmail.com');

const users = userDAO.findAll();

users.forEach(u => {
    console.log(u.getInfo());
});