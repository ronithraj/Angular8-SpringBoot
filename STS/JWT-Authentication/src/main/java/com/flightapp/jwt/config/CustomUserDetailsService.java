package com.flightapp.jwt.config;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.flightapp.jwt.model.DAOUser;
import com.flightapp.jwt.model.UserDTO;
import com.flightapp.jwt.repository.UserRepository;

@Service
public class CustomUserDetailsService implements UserDetailsService {

	@Autowired
	private UserRepository userDao;

	@Autowired
	private PasswordEncoder bcryptEncoder;

	private static String user_role = "ROLE_USER";

	@Override
	public User loadUserByUsername(String username) throws UsernameNotFoundException {
		List<SimpleGrantedAuthority> roles = null;
		DAOUser user = userDao.findByUsername(username);
		if (user != null) {
			roles = Arrays.asList(new SimpleGrantedAuthority(user.getRole()));
			return new User(user.getUsername(), user.getPassword(), roles);
		}
		throw new UsernameNotFoundException("User not found with the name " + username);
	}

	public DAOUser save(UserDTO user) {
		DAOUser newUser = new DAOUser();
		newUser.setUsername(user.getUsername());
		newUser.setPassword(bcryptEncoder.encode(user.getPassword()));
		if (user.getRole() != null) {
			newUser.setRole(user.getRole());
		} else {
			newUser.setRole(user_role);
		}
		newUser.setEmailId(user.getEmailId());
		return userDao.save(newUser);
	}

	public UserDTO getIdForUserName(String username) {
		DAOUser user = userDao.findByUsername(username);
		if (user != null) {
			UserDTO dto = new UserDTO();
			dto.setEmailId(user.getEmailId());
			dto.setId(user.getId());
			dto.setUsername(user.getUsername());
			return dto;
		}
		throw new UsernameNotFoundException("User not found with the name " + username);
	}
	
	

}
