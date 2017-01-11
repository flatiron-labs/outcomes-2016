module SkrollrDataHelpers
  def skrollr_data(opts)
    top_position = opts[:top_position]
    section_id = opts[:section_id]
    menu_anchor_id = opts[:menu_anchor_id]
    easing_only = opts[:easing_only]

    data_hash = {}

    if easing_only
      data_hash["data-150-top"] = "top:#{top_position}%;"
      data_hash["data-50-top"] = "opacity:1;"
      data_hash["data-top"] = "opacity:1;"
      data_hash["data--200-top"] = "opacity:0;"
      data_hash["data--400-top"] = "top:#{top_position}%;"
    else
      data_hash["data-300-top"] = "top:#{top_position + 20}%;"
      data_hash["data-100-top"] = "opacity:0;top:#{top_position + 20}%;"
      data_hash["data-top"] = "opacity:1;top:#{top_position}%;"
      data_hash["data--100-top"] = "opacity:1;"
      data_hash["data--300-top"] = "opacity:0;top[swing]:#{top_position - 20}%;"
    end

    # Move element off page
    data_hash["data--410-top"] = "opacity:0;top:-50%;"
    data_hash["data-400-top"] = "opacity:0;top:150%;"

    # Bind elements
    data_hash["data-anchor-target"] = "##{section_id}"
    data_hash["data-menu-anchor"] = "##{menu_anchor_id}"

    data_hash
  end
end
