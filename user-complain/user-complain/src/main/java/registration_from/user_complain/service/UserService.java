package registration_from.user_complain.service;

import registration_from.user_complain.entity.User;
import java.util.List;

public interface UserService {
    void registerUser(User user);
    List<User> getAllUser();
}
