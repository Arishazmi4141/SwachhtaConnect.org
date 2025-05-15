package registration_from.user_complain.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="register")
public class User {
    private String name;
    @Id
    private String email;
    private String phone;
    private String address;
    private String issue_location;
    private String issue;
}
