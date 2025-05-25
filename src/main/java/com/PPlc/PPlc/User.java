package com.PPlc.PPlc;

import jakarta.persistence.*;

@Entity
@Table(name = "utilisateur") // ou "users" si c’est ça dans ta BDD
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "utilisateur_id")
    private Long id;

    @Column(name = "email", unique = true, nullable = false)
    private String username;

    @Column(name = "mot_de_passe", nullable = false)
    private String password;

    // Getters et setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }

    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
}