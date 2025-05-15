package registration_from.user_complain.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import registration_from.user_complain.entity.User;
import registration_from.user_complain.service.UserService;

@Controller
public class UserController {
    @Autowired
    private UserService service;

    @GetMapping("/")
    public String homePage(Model model) {
        return "index"; // src/main/resources/templates/index.html
    }

    @GetMapping("/index.html")
    public String home(Model model) {
        return "index"; // src/main/resources/templates/index.html
    }

    @GetMapping("/Scheme.html")
    public String schemePage(Model model){
        return "Scheme"; // src/main/resources/templates/Scheme.html
    }

    @GetMapping("/About-us.html")
    public String aboutPage(Model model){
        return "About-us"; // src/main/resources/templates/About-us.html
    }

    @GetMapping("/register.html")
    public String register(Model model){
       User user = new User();
       model.addAttribute("user", user);
        return "register"; // src/main/resources/templates/register.html
    }

    @GetMapping("/user.html")
    public String viewUsers(Model model) {
        List<User> users = service.getAllUser();
        model.addAttribute("users", users); // Changed attribute name
        return "user"; // src/main/resources/templates/user.html
    }

    @PostMapping("/registerUser")
    public String userRegister(@ModelAttribute("user") User user){
        String result = "index"; // Assuming successful registration
        System.out.println(user); // Log the user details
        try {
            service.registerUser(user); // Service handles registration
            result = "index"; // Navigate to index after successful registration
        } catch (Exception e) {
            result = "error"; // Redirect to error page in case of failure
        }
        return result;
    }
}
