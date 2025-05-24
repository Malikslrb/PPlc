package com.PPlc.PPlc;

import jakarta.persistence.*;

@Entity
public class Ticket {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String matchName;
    private String seatNumber;
    private Double price;
    private String status; // ex: "AVAILABLE", "RESERVED", "SOLD"

    // Getters et setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getMatchName() { return matchName; }
    public void setMatchName(String matchName) { this.matchName = matchName; }
    public String getSeatNumber() { return seatNumber; }
    public void setSeatNumber(String seatNumber) { this.seatNumber = seatNumber; }
    public Double getPrice() { return price; }
    public void setPrice(Double price) { this.price = price; }
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
} 