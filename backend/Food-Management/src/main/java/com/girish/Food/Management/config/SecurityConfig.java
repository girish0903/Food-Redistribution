//package com.girish.Food.Management;
//
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity;
//import org.springframework.security.config.web.server.ServerHttpSecurity;
//import org.springframework.security.web.server.SecurityWebFilterChain;
//import org.springframework.web.cors.CorsConfigurationSource;
//
//@Configuration
//@EnableWebFluxSecurity
//public class SecurityConfig {
//
//    private final CorsConfigurationSource corsConfigurationSource;
//
//    public SecurityConfig(CorsConfigurationSource corsConfigurationSource) {
//        this.corsConfigurationSource = corsConfigurationSource;
//    }
//
//    @Bean
//    public SecurityWebFilterChain springSecurityFilterChain(ServerHttpSecurity http) {
//        http
//                .csrf(ServerHttpSecurity.CsrfSpec::disable) // Disable CSRF protection
//                .cors(corsSpec -> corsSpec.configurationSource((org.springframework.web.cors.reactive.CorsConfigurationSource) corsConfigurationSource)) // Enable CORS with custom configuration
//                .authorizeExchange(exchanges -> exchanges
//                        .pathMatchers("/api/**").permitAll()
//                        .anyExchange().authenticated()
//                );
//        return http.build();
//    }
//}