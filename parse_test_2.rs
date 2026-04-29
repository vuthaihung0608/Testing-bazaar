fn main() {
    let clean = "[Coflnet]: Your sell-order for 1x Suspicious Scrap has been undercut by an order of 1x at 213,167.0";
    if clean.starts_with("[Coflnet]: Your ") && (clean.contains(" has been undercut by ") || clean.contains(" has been outbid by ")) {
        let is_buy_order = clean.contains("buy-order");
        if let Some(for_idx) = clean.find(" for ") {
            if let Some(has_idx) = clean.find(" has been ") {
                let target_text = clean[for_idx + 5..has_idx].trim(); // e.g. "160x Jacob's Ticket"
                let item_name = if let Some(space_idx) = target_text.find("x ") {
                    target_text[space_idx + 2..].trim().to_string()
                } else {
                    target_text.to_string()
                };
                println!("Got item_name: '{}'", item_name);
            }
        }
    } else {
        println!("Did not match");
    }
}
