package com.flightapp.jwt.model;

public class AuthenticationResponse {

	private String token;

	private String userName;

	private String roles;

	private Long id;

	public AuthenticationResponse(String userName, String token, String roles/* , Long id */) {
		super();
		this.userName = userName;
		this.token = token;
		this.roles = roles;
//		this.id = id;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getRoles() {
		return roles;
	}

	public void setRoles(String roles) {
		this.roles = roles;
	}

}
