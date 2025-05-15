package registration_from.user_complain.service;

import org.springframework.stereotype.Service;
import registration_from.user_complain.entity.User;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import registration_from.user_complain.repo.UserRepo;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepo repo;

    @Override
    public void registerUser(User user) {
        repo.save(user);
    }

    @Override
    public List<User> getAllUser() {
        return repo.findAll(); // Fetch all users from the database
    }
}
