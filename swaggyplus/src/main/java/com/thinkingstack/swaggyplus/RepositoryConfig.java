package com.thinkingstack.swaggyplus;

import com.thinkingstack.swaggyplus.domains.cart.Cart;
import com.thinkingstack.swaggyplus.domains.dish.Dish;
import com.thinkingstack.swaggyplus.domains.restaurant.Restaurant;
import com.thinkingstack.swaggyplus.domains.user.User;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;

@Configuration
public class RepositoryConfig implements RepositoryRestConfigurer{
    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
        config.exposeIdsFor(Cart.class);
        config.exposeIdsFor(Dish.class);
        config.exposeIdsFor(Restaurant.class);
        config.exposeIdsFor(User.class);
    }
}