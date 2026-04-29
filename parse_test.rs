fn main() {
    let msg = "[Bazaar] Sell Offer Setup! 14x Suspicious Scrap for 2,950,766 coins.";
    let prefix = "[Bazaar] Sell Offer Setup! ";
    if msg.starts_with(prefix) {
        let rest = &msg[prefix.len()..];
        // "14x Suspicious Scrap for 2,950,766 coins."
        if let Some(x_idx) = rest.find("x ") {
            let amount_str = &rest[..x_idx].replace(",", "");
            if let Ok(amount) = amount_str.parse::<u32>() {
                if let Some(for_idx) = rest.find(" for ") {
                    let item_name = &rest[x_idx + 2..for_idx];
                    let coins_part = &rest[for_idx + 5..]; // "2,950,766 coins."
                    if let Some(coins_end) = coins_part.find(" coins.") {
                        let total_coins_str = &coins_part[..coins_end].replace(",", "");
                        if let Ok(total_coins) = total_coins_str.parse::<f64>() {
                            let price_per_unit = total_coins / amount as f64;
                            println!("item: {}, amt: {}, ppu: {}", item_name, amount, price_per_unit);
                        }
                    }
                }
            }
        }
    }
}
