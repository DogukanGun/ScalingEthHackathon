def calculate_safety_factor(total_staked, average_operator_cost, number_of_operators, potential_profit_from_corruption):
    CoC = total_staked + (average_operator_cost * number_of_operators)
    PfC = potential_profit_from_corruption
    SF = (CoC - PfC) / CoC if CoC != 0 else float('inf')  # Handle division by zero
    return CoC, PfC, SF

if __name__ == "__main__":
    import os
    total_staked = float(os.environ['TOTAL_STAKED'])
    average_operator_cost = float(os.environ['AVERAGE_OPERATOR_COST'])
    number_of_operators = int(os.environ['NUMBER_OF_OPERATORS'])
    potential_profit_from_corruption = float(os.environ['POTENTIAL_PROFIT_FROM_CORRUPTION'])

    coc, pfc, sf = calculate_safety_factor(total_staked, average_operator_cost, number_of_operators, potential_profit_from_corruption)
    print(f"Cost of Corruption: {coc}")
    print(f"Profit from Corruption: {pfc}")
    print(f"Safety Factor: {sf}")
