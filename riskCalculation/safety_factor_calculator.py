def calculate_safety_factor(total_staked, average_operator_cost, number_of_operators, potential_profit_from_corruption):
    CoC = total_staked + (average_operator_cost * number_of_operators)
    PfC = potential_profit_from_corruption
    SF = (CoC - PfC) / CoC if CoC != 0 else float('inf')  # Handle division by zero
    return CoC, PfC, SF

if __name__ == "__main__":
    import sys
    total_staked = float(sys.argv[1])
    average_operator_cost = float(sys.argv[2])
    number_of_operators = int(sys.argv[3])
    potential_profit_from_corruption = float(sys.argv[4])

    coc, pfc, sf = calculate_safety_factor(total_staked, average_operator_cost, number_of_operators, potential_profit_from_corruption)
    print(f"Cost of Corruption: {coc}")
    print(f"Profit from Corruption: {pfc}")
    print(f"Safety Factor: {sf}")
