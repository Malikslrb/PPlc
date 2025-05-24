package com.PPlc.PPlc;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TicketService {
    @Autowired
    private TicketRepository ticketRepository;

    public List<Ticket> getAllTickets() {
        return ticketRepository.findAll();
    }

    public Optional<Ticket> getTicketById(Long id) {
        return ticketRepository.findById(id);
    }

    public Ticket createTicket(Ticket ticket) {
        return ticketRepository.save(ticket);
    }

    public void deleteTicket(Long id) {
        ticketRepository.deleteById(id);
    }

    public Ticket updateTicket(Long id, Ticket ticketDetails) {
        Ticket ticket = ticketRepository.findById(id).orElseThrow();
        ticket.setMatchName(ticketDetails.getMatchName());
        ticket.setSeatNumber(ticketDetails.getSeatNumber());
        ticket.setPrice(ticketDetails.getPrice());
        ticket.setStatus(ticketDetails.getStatus());
        return ticketRepository.save(ticket);
    }
} 